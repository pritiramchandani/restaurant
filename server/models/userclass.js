var validator = require('validator');
const Queries = require("./queries");
var jwt = require('jsonwebtoken');


const queriesobj = new Queries();

class UsersClass{
    createUser = async (req,res) => {
        const data = req.body;

        if(!("name" in data)){
            return res.status(400).json({ message: 'Name is empty' });
        }
        if(!("email" in data)){
            return res.status(400).json({ message: 'Email is empty' });
        }
        if(!("password" in data)){
            return res.status(400).json({ message: 'Password is empty' });
        }

        if(validator.isEmpty(data.name)){
            return res.status(400).json({ message: 'Name is empty' });
        }

        if(validator.isEmpty(data.email)){
            return res.status(400).json({ message: 'Email is empty' });
        }

        if(!validator.isEmail(data.email)){
            return res.status(400).json({ message: 'Invalid Email' });
        }

        if(!validator.isStrongPassword(data.password,[{ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}])){
            return res.status(400).json({ message: 'Make password Strong' });
        }
        const emailCount = await queriesobj.getRecordCount('users',{email:data.email});

        if(emailCount > 0){
            return res.status(400).json({ message: 'Email already Registered' });
        }

        queriesobj.insertRecord('users',data);


        return res.status(200).json({ message: 'Thank you for registration' });

    }


    loginUser = async (req,res) => {
        const data = req.body;

        if(!("email" in data)){
            return res.status(400).json({ message: 'Email is empty' });
        }
        if(!("password" in data)){
            return res.status(400).json({ message: 'Password is empty' });
        }

        if(validator.isEmpty(data.email)){
            return res.status(400).json({ message: 'Email is empty' });
        }

        if(validator.isEmpty(data.password)){
            return res.status(400).json({ message: 'Password is empty' });
        }

        if(!validator.isEmail(data.email)){
            return res.status(400).json({ message: 'Invalid Email' });
        }

        const userCount = await queriesobj.getRecordCount('users',{email:data.email,password:data.password});
        
        if(userCount < 1){
            return res.status(301).json({ message: 'Invalid Login' });
        }

        let userInfo = await queriesobj.getSelectWithWhere('users',{email:data.email,password:data.password});
        userInfo = userInfo[0];

        const token = this.generateToken(userInfo, process.env.APP_SECRETE_KEY);

        return res.status(200).json({ message: 'Thank you for Login', token: token });

    }

    // get user information using id and email
    getUserInfo = async (req,res) => {
        const data = req.user;
        let userInfo = await queriesobj.getSelectWithWhere('users',{email:data.email,id:data.id});
        userInfo = userInfo[0];
        return res.status(200).json({ message: 'Thank you for Login' , userInfo:userInfo});
    }


    // Generate JWT Token
    generateToken = ( user, secretKey) => {
        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '48h' });
        return token;
    }

    // Check authentication via token
    authenticateToken = (req, res, next) => {
        const authHeader = req.header('Authorization');

        if (!authHeader) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        
        const token = authHeader.split(' ')[1];

        
        jwt.verify(token, process.env.APP_SECRETE_KEY, (err, user) => {
            
            if (err) {
                return res.status(403).json({ message: 'Forbidden', err: err });
            }
            
            req.user = user;
            next();
        
        });
    }
}
module.exports = UsersClass;
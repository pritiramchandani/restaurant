const {mySqlQury} = require('./db');

class Queries{

    constructor() {}
    insertRecord = async (table, valueData) => {

        var insertData = "";
        var countValues = Object.values(valueData);
        var n = 1;
        for(const [key, value] of Object.entries(valueData)) {
            console.log(`${key}: ${value}`);
            if(countValues.length == n){
                insertData +=`${key}='${value}'`;
            }else{
                insertData +=`${key}='${value}',`;
            }
            n++;
        }

        var query = `Insert Into ${table} set ${insertData}`; 
        return await mySqlQury(query);
    };

    getRecordCount = async(table,where) => {
        var query = "SELECT count(*) As count FROM "+table+"  where "+where;
        return await mySqlQury(query);
    }

    getSelectWithWhere = async (table, where) => {
        var query = 'Select * from '+table+' Where '+where;
        return await mySqlQury(query);
    }
}

module.exports = Queries;
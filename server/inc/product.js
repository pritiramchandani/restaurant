var validator = require("validator");
const Queries = require("../models/queries");
var jwt = require("jsonwebtoken");

const queriesobj = new Queries();

class ProductClass {
  createProduct = async (req, res) => {
    const data = req.body;

    if (!("name" in data) || validator.isEmpty(data.name)) {
      return res.status(400).json({ message: "Name is empty" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Featured Image is empty" });
    }

    if (!("price" in data) || validator.isEmpty(data.price)) {
      return res.status(400).json({ message: "Price is empty" });
    }

    if (!("description" in data) || validator.isEmpty(data.description)) {
      return res.status(400).json({ message: "Description is empty" });
    }

    const nameCount = await queriesobj.getRecordCount(
      "products",
      `name='${data.name}'`
    );

    if (nameCount[0].count > 0) {
      return res.status(400).json({ message: "Name already Registered" });
    }

    try {
      // Assuming 'req.file.filename' contains the generated filename after uploading
      data.featured_image = req.file.filename;

      queriesobj.insertRecord("products", data);
      // console.log(data);
      return res.status(200).json({ message: "Product added successfully" });
    } catch (error) {
      console.log(error);
      // return res.status(400).json({ message: error });
    }
  };

  showProduct = async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = 10;

    const offset = (page - 1) * limit;

    try {
      const productsCount = await queriesobj.getRecordCount("products");

      const data = await queriesobj.getSelectWithoutWhereWithLimit("products", offset, limit);

      data.forEach((element) => {
        element.featured_image = "http://localhost:5000/uploads/" + element.featured_image;
      });

      return res.status(200).json({ message: "Product view successfully", data, productsCount: productsCount[0].count });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
 
  deleteProduct = async (req, res) => {
    console.log(req.query.id);

    await queriesobj.getDeleteWhere("products", "id=" + req.query.id);

    return res.status(200).json({ message: "Product delete successfully" });
  };

  UpdateStatusProduct = async (req, res) => {
    console.log(req.query.id);
    const data = await queriesobj.getSelectWithWhere(
      "products",
      "id=" + req.query.id
    );
    let status = data[0].status ? 0 : 1;
    await queriesobj.getUpdateWhere(
      "products",
      "status=" + status,
      "id=" + req.query.id
    );

    return res.status(200).json({ message: "Product update successfully" });
  };
}

module.exports = ProductClass;

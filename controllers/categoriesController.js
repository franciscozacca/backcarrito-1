const categoryModel = require("../models/categoriesModel");

module.exports = {
    getAll: async(req, res, next) =>{
        console.log(req.query)
        const producto = await categoriesModel.find();
        res.json(producto);
    },
    create: function(req, res, next){
        console.log(req.body);
        const product = new categoriesModel({
            name: req.body.name,
        })
        product.save();
        res.json(product);
    }
    
}


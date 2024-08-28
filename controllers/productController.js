const productModel = require('../models/productModel');

exports.getProducts = async(req,res,next) => {
    const products = await productModel.find();
    res.json({
        message: 'Get products working',
        products
    })
}

exports.getSingleProduct = async(req,res,next) => {
    try{
        const product = await productModel.findById(req.params.id);
        res.json({
            message: 'Get Single product working',
            product
        })
    }
    catch (error){
        res.json({
            message: error.message
        })
    }
}
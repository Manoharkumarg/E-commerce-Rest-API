const orderModel = require('../models/orderModel');
const productModel = require('../models/productModel');

exports.createOrder = async(req,res,next) =>{
    const cartItems = req.body;
    const amount = Number(cartItems.reduce((preValue,item) => (preValue + item.product.price * item.qty),0)).toFixed(2);
    const status = 'pending';
    const order = await orderModel.create({cartItems, amount, status});
    

    // cartItems.forEach(async (item) => {
    //     const product = await productModel.find({name : item.product.name});
    //     product.stock=product.stock-item.qty;
    //     await product.save();
    // });


    res.json({
        message: "order works",
        order
    })
}
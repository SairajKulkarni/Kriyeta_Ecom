const { addListener } = require("process");
const Product = require("../models/productModel");


// Create product ------------------- ONLY ADMIN
exports.createProduct = async(req, res, next)=>{

    const product = await Product.create(req.body);

    res.status(201).json({
        success:true,
        product
    })
}

// GET all products
exports.getAllProducts= async(req, res)=>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        products
    });
}

// GET product details
exports.getProductDetails = async(req, res, next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        });
    }

    res.status(200).json({
        success:true,
        product
    });
}

// UPDATE product --------------------- ONLY ADMIN
exports.updateProduct = async(req, res,next)=>{
    let product = Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        });
    }

    product  = await Product.findById(req.params.id, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    });
}

// DELETE product --------------------- ONLY ADMIN
exports.deleteProduct = async(req, res, next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        });
    }

    await product.deleteOne();
    
    res.status(200).json({
        success:true,
        message:"Product deleted successfully"
    });
}
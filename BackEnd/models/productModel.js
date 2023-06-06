const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter your  product Name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"Please Enter your  product Description"]
    },
    price:{
        type:Number,
        required:[true,"Please Enter your  product Price"],
        maxLength:[8,"Price cannot exceed 8 characters"]
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true,"Please Enter your  product Catrgory"]
    },
    Stock:{
        type:Number,
        required:[true,"Please Enter your  product Stock"],
        maxLength:[4,"Stock cannot exceed 4 characters"],
        dafault:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:String,
                required:true
            }
        },
    ],
    createdAt:{
        type:Date,
        dafault:Date.now
    }
});

module.exports = mongoose.model("Product",productSchema);
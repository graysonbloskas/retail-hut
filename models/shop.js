const mongoose = require("mongoose");
const Schema = mongoose.Schema;

 

const shopSchema = new Schema({

    name:{ type: String, required: true },
    
    href: { type: String, default: "" },
  
    products: [{
        type: Schema.Types.ObjectId, 
        ref: "Product"
    }]
    });


    const Shop = mongoose.model("Shop",  shopSchema);


    module.exports = Shop
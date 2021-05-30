const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retailhut");

let shopSeed = [
  {
    name: "TeeLikeYours",
    href: "https://www.etsy.com/shop/TeeLikeYours?ref=simple-shop-header-name&listing_id=551742682",
    type: ["Yellow Tee Shirt", "Red Dress", "Blue Tee"],
    products: []
  },
  {
    name: "BrielleShoppe",
    href: "https://www.etsy.com/shop/BrielleShoppe?ref=yr_purchases",
    type: [],
    products:[]
  },
  {
    name: "FancyLittleGiftsCo",
    href: "https://www.etsy.com/shop/FancyLittleGiftsCo?ref=simple-shop-header-name&listing_id=751831474",
    type: ["Men's Wristwatch"],
    products:[]
  },
  {
    name: "EclipseGamingSupply",
    href: "https://www.etsy.com/shop/EclipseGamingSupply?ref=simple-shop-header-name&listing_id=810175125",
    type: ["PS4 Controller"],
    products:[]

  }
];

db.Product.find().then(productData =>{ 
  shopSeed = shopSeed.map(shop => {
    productData.forEach(product => {
      switch (product.title){
        case "Yellow Tee Shirt":
          case "Red Dress":     
          case "Blue Tee":
shop.products.push(product._id)
          break 
      }
    })
    return shop
  })


  db.Shop
  .remove({})
  .then(() => db.Shop.collection.insertMany(shopSeed))

})

// 

// this is the create to make a new shop

//   db.Shop.create({name: "TeeLikeYours",
//   href: "https://www.etsy.com/shop/TeeLikeYours?ref=simple-shop-header-name&listing_id=551742682",
//   products: []
// }).then(data => {
//       console.log(data.result.n + " records inserted!");
//       process.exit(0);
//     })
//     .catch(err => {
//       console.error(err);
//       process.exit(1);
//     });
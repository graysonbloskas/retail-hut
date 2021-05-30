const mongoose = require("mongoose");
const db = require("../models");

 function shopInit (){

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retailhut");

let shopSeed = [
  {
    name: "TeeLikeYours",
    href: "https://www.etsy.com/shop/TeeLikeYours?ref=simple-shop-header-name&listing_id=551742682",
    type: ["Yellow Tee Shirt", "Red Dress", "Blue Tee", "Navy Blue Tee","Pink Women's Tee"],
    products: []
  },
  {
    name: "BrielleShoppe",
    href: "https://www.etsy.com/shop/BrielleShoppe?ref=yr_purchases",
    type: ["Makeup Brushes", "Makeup Sponge"],
    products: []
  },
  {
    name: "FancyLittleGiftsCo",
    href: "https://www.etsy.com/shop/FancyLittleGiftsCo?ref=simple-shop-header-name&listing_id=751831474",
    type: ["Men's Wristwatch", "Women's Wrist Watch", "Father's Day Tee" ],
    products: []
  },
  {
    name: "EclipseGamingSupply",
    href: "https://www.etsy.com/shop/EclipseGamingSupply?ref=simple-shop-header-name&listing_id=810175125",
    type: ["PS4 Controller", "PS4 Controller Custom", "Super Mario Maker 2", "Xbox controller", "Gaming Keyboard"],
    products: []

  }
];

 db.Product.find().then(productData => {
  shopSeed = shopSeed.map(shop => {
    shop.type.forEach(type => {
       console.log(type)
      productData.forEach(product => {
        console.log(type, product.title)
        if (type === product.title) {
          shop.products.push(product._id)
        }
      })
    })
    return {
      name: shop.name,
      href: shop.href,
      products:shop.products 
    }
  })


  db.Shop
  .remove({})
  .then(() => db.Shop.collection.insertMany(shopSeed))
.then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
        process.exit(1);
      });
})

}



 

shopInit()

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
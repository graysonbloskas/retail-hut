const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/retailhut");

const shopSeed = [
  {
    name: "TeeLikeYours",
    href: "https://www.etsy.com/shop/TeeLikeYours?ref=simple-shop-header-name&listing_id=551742682"
  },
  {
    name: "BrielleShoppe",
    href: "https://www.etsy.com/shop/BrielleShoppe?ref=yr_purchases"
  },
  {
    name: "FancyLittleGiftsCo",
    href: "https://www.etsy.com/shop/FancyLittleGiftsCo?ref=simple-shop-header-name&listing_id=751831474" 
  },
  {
    name: "EclipseGamingSupply",
    href: "https://www.etsy.com/shop/EclipseGamingSupply?ref=simple-shop-header-name&listing_id=810175125"
  }
];
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
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/retailhut"
  );

  const catSeed = [
      { name: "Clothing/Jewelry" },

      { name: "Electronics" },

      { name: "Beauty" },

      { name: "Shoes" }
    ]

    db.Category
  .remove({})
  .then(() => db.Category.collection.insertMany(catSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
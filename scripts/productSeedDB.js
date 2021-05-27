const { ObjectID } = require("bson");
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/retailhut"
  );

  const productSeed = [

{
    title: "Yellow Tee Shirt",
    price: 10, 
    image: "https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg",
    description: "A yellow shirt, made of polyester",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_1
},
{
    title: "Red Dress",
    price: 15, 
    image: "https://fnug.com/wp-content/uploads/what-nail-colour-goes-best-with-red-dress.jpg",
    description: "high heels, Red dress, RED DRREsss",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_1
},
{
    title: "Blue Tee",
    price: 5, 
    image: "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540",
    description: "A blue tee",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_1
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},
{
    title: "",
    price: 10, 
    image: "",
    description: "",
    stock: 10,
    category: ObjectID_1,
    shop: ObjectID_2
},























  ]



  db.Product
  .remove({})
  .then(() => db.Product.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
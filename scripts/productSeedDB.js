

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/retailhut", { useUnifiedTopology: true } ,{ useNewUrlParser: true } 
);

let productSeed = [

  {
    title: "Yellow Tee Shirt",
    price: 10,
    image: "https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg",
    description: "A yellow shirt, made of polyester",
    stock: 10,
    tags: ["t-shirts", "tshirt", "Yellow shirt", "clothes"],
    type: "Clothing-Jewelry"
  },
  {
    title: "Red Dress",
    price: 15,
    image: "https://fnug.com/wp-content/uploads/what-nail-colour-goes-best-with-red-dress.jpg",
    description: "high heels, Red dress, RED DRREsss",
    stock: 10,
    tags: ["dress", "red", "red dress", "women's dresses"],
    type: "Clothing-Jewelry"
  },
  {
    title: "Blue Tee",
    price: 5,
    image: "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540",
    description: "A blue tee",
    stock: 10,
    type: "Clothing-Jewelry"

  },
  {
    title: "Men's Wristwatch",
    price: 50,
    image: "https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666",
    description: "An elegant Men's wristwatch",
    stock: 20,
    type: "Clothing-Jewelry"
  },
  {
    title: "PS4 Controller",
    price: 55,
    image: "https://cdn10.bigcommerce.com/s-ksslwy/products/3238/images/8290/PS4_GreenSoft__86916.1559242522.1280.1280.png?c=2",
    description: "A controller for your ps4",
    stock: 10,
    type: "Electronics"

  },
  // {
  //     title: "Makeup Brushes",
  //     price: 15, 
  //     image: "data:image/jpeg;base64,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",
  //     description: "Soft, elegant makeup brushes",
  //     stock: 10,
  //     category: ""ID_3,
  //     shop: ""ID_3
  // },
  // {
  //     title: "Makeup Sponge",
  //     price: 6, 
  //     image: "https://media.istockphoto.com/photos/make-up-sponge-picture-id1097529892?k=6&m=1097529892&s=612x612&w=0&h=_YVylwPY6lEKS7jAODjwQQtfZGIBQIr6jytZOZ3AV7I=",
  //     description: "a sponge for blending makeup",
  //     stock: 10,
  //     category: ""ID_3,
  //     shop: ""ID_3
  // },
  // {
  //     title: "PS4 Controller Custom",
  //     price: 60, 
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRkq3ZTiytMcIZB4_uao5hU-LDFxaINPP8w&usqp=CAU",
  //     description: "A neat custom Ps4",
  //     stock: 10,
  //     category: ""ID_2,
  //     shop: ""ID_4
  // },
  // {
  //     title: "Women's Wrist Watch",
  //     price: 55, 
  //     image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603725158-a4b6cf3d-e7c4-4395-ab22-0abad702f9f8.jpg?crop=1xw:0.978xh;center,top&resize=480:*",
  //     description: "a simple, yet striking wristwatch",
  //     stock: 10,
  //     category: ""ID_1,
  //     shop: ""ID_2
  // },
  // {
  //     title: "Super Mario Maker 2",
  //     price: 60, 
  //     image: "https://kubrick.kubefeature.hearstapps.net/vader-prod.s3.amazonaws.com/1605909733-supermario.jpg",
  //     description: "Yahoo!, it'sa Supa Mario",
  //     stock: 30,
  //     category: ""ID_2,
  //     shop: ""ID_4
  // },
  // {
  //     title: "Xbox controller",
  //     price: 55, 
  //     image: "https://i5.walmartimages.com/asr/d087f2a0-56d5-412d-9fba-69aa2c3329ef.e9f5522ef9e8e345d9a7b00169fe9938.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
  //     description: "A controller for your xbox!",
  //     stock: 5,
  //     category: ""ID_2,
  //     shop: ""ID_4
  // },
  // {
  //     title: "Navy Blue Tee",
  //     price: 10, 
  //     image: "https://cdni.llbean.net/is/image/wim/224547_0_44?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
  //     description: "what a nice navy shirt",
  //     stock: 20,
  //     category: ""ID_1,
  //     shop: ""ID_1
  // },
  // {
  //     title: "Gaming Keyboard",
  //     price: 40, 
  //     image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417111_sd.jpg;maxHeight=640;maxWidth=550",
  //     description: "A keyboard for Gaming",
  //     stock: 25,
  //     category: ""ID_2,
  //     shop: ""ID_4
  // },
  // {
  //     title: "Pink Women's Tee",
  //     price: 15, 
  //     image: "https://www.boscovs.com/wcsstore/boscovs/images/store/product/images/743042046bdh8g.jpg",
  //     description: "A cute pink Tee, perfect for every occasion",
  //     stock: 10,
  //     category: ""ID_1,
  //     shop: ""ID_1
  // },
  // {
  //     title: "Father's Day Tee",
  //     price: 15, 
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWk0XputOf91H9c-cSSEtEbYKIB7g1HCocw&usqp=CAU",
  //     description: "A cool tee for the ~coolest pop~",
  //     stock: 40,
  //     category: ""ID_1,
  //     shop: ""ID_1
  // },
  // 

]

// db.Shop.findById({_id:"60b1389c53e4053fc4604f4c"}).then(shop => {

//     if (shop){
//       console.log(shop);
//       shop.products.push({
//         title: "Yellow Tee Shirt",
//         price: 10, 
//         image: "https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg",
//         description: "A yellow shirt, made of polyester",
//         stock: 10,
//         tags: ["t-shirts","tshirt", "Yellow shirt", "clothes"],
//         category: "Clothing-Jewelry",

//     })
//       shop.save().then(shop => {
//         console.log(shop)
//         process.exit(0);
//       })
//     } else {
//       err = new Error("There is no shop!")
//       console.log(err)
//       process.exit(0);
//     }

//   }).catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
db.Category.find().then(catData => {


  productSeed = productSeed.map(product => {
    switch (product.type) {
      case "Clothing-Jewelry":
        product.category = catData[0]._id
        break;
      case "Electronics":
        product.category = catData[1]._id
        break
      case "Beauty":
        product.category = catData[2]._id
        break
      case "Shoes":
        product.category = catData[3]._id
        break
    }

    return product
  })


  db.Product.remove({})
    .then(() => db.Product.collection.insertMany(productSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
})





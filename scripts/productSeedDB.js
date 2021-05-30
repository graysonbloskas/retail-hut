
const mongoose = require("mongoose");
const db = require("../models");




function productInit (){
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
    tags: ["t-shirts", "tshirt", "Yellow shirt", "clothes", "tee"],
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
    tags: ["t-shirt", "tshirt", "blue", "blue tshirt", "clothes", "mens shirt", "tee"],
    type: "Clothing-Jewelry"

  },
  {
    title: "Men's Wristwatch",
    price: 50,
    image: "https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666",
    description: "An elegant Men's wristwatch",
    stock: 20,
    tags:["mens watch", "men's watch", "wristwatch", "jewelry"],
    type: "Clothing-Jewelry"
  },
  {
    title: "PS4 Controller",
    price: 55,
    image: "https://cdn10.bigcommerce.com/s-ksslwy/products/3238/images/8290/PS4_GreenSoft__86916.1559242522.1280.1280.png?c=2",
    description: "A controller for your ps4",
    stock: 10,
    tags: ["ps4 controller", "ps4", "electronics", "controller", "father's day"], 
    type: "Electronics"

  },
  {
      title: "Makeup Brushes",
      price: 15, 
      image: "https://media.istockphoto.com/photos/beauty-brushes-picture-id1161219626?k=6&m=1161219626&s=612x612&w=0&h=TOwOQCRfP00HtbnDrVaBupAODzA2ydvMQtnfv1uz3m0=",
      description: "Soft, elegant makeup brushes",
      stock: 10,
      tags: ["makeup", "brushes", "beauty", "makeup brushes"],
      type: "Beauty"
  },
  {
      title: "Makeup Sponge",
      price: 6, 
      image: "https://media.istockphoto.com/photos/make-up-sponge-picture-id1097529892?k=6&m=1097529892&s=612x612&w=0&h=_YVylwPY6lEKS7jAODjwQQtfZGIBQIr6jytZOZ3AV7I=",
      description: "a sponge for blending makeup",
      stock: 10,
      tags: ["makeup", "brushes", "beauty", "makeup brushes", "sponge", "makeup sponge"],
      type: "Beauty"
  },
  {
      title: "PS4 Controller Custom",
      price: 60, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzRkq3ZTiytMcIZB4_uao5hU-LDFxaINPP8w&usqp=CAU",
      description: "A neat custom Ps4",
      stock: 10,
      tags: ["ps4 controller", "ps4", "electronics", "controller"],
      type: "Electronics"
     
  },
  {
      title: "Women's Wrist Watch",
      price: 55, 
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1603725158-a4b6cf3d-e7c4-4395-ab22-0abad702f9f8.jpg?crop=1xw:0.978xh;center,top&resize=480:*",
      description: "a simple, yet striking wristwatch",
      stock: 10,
      tags:["womens watch", "women's watch", "wristwatch", "jewelry"],
      type: "Clothing-Jewelry"
  },
  {
      title: "Super Mario Maker 2",
      price: 60, 
      image: "https://kubrick.kubefeature.hearstapps.net/vader-prod.s3.amazonaws.com/1605909733-supermario.jpg",
      description: "Yahoo!, it'sa Supa Mario",
      stock: 30,
      tags: ["game", "video game", "electronics", "father's day", "nintendo", "staff pick"], 
      type: "Electronics"
  },
  {
      title: "Xbox controller",
      price: 55, 
      image: "https://i5.walmartimages.com/asr/d087f2a0-56d5-412d-9fba-69aa2c3329ef.e9f5522ef9e8e345d9a7b00169fe9938.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
      description: "A controller for your xbox!",
      stock: 5,
      tags: ["xbox controller", "xbox", "electronics", "controller", "father's day"], 
    type: "Electronics"
  },
  {
      title: "Navy Blue Tee",
      price: 10, 
      image: "https://cdni.llbean.net/is/image/wim/224547_0_44?hei=1095&wid=950&resMode=sharp2&defaultImage=llbstage/A0211793_2",
      description: "what a nice navy shirt",
      stock: 20,
      tags: ["t-shirt", "tshirt", "navy blue", "blue tshirt", "clothes", "mens shirt", "tee", "father's day"],
    type: "Clothing-Jewelry"
  },
  {
      title: "Gaming Keyboard",
      price: 40, 
      image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6417/6417111_sd.jpg;maxHeight=640;maxWidth=550",
      description: "A keyboard for Gaming",
      stock: 25,
      tags: ["controller", "pc", "electronics", "mac","gaming","keyboard", "father's day", "gaming keyboard", "staff pick"], 
      type: "Electronics"
  },
  {
      title: "Pink Women's Tee",
      price: 15, 
      image: "https://www.boscovs.com/wcsstore/boscovs/images/store/product/images/743042046bdh8g.jpg",
      description: "A cute pink Tee, perfect for every occasion",
      stock: 10,
      tags: ["shirt", "tshirt", "women's", "women's dresses", "women", "staff pick"],
      type: "Clothing-Jewelry"
  },
  {
      title: "Father's Day Tee",
      price: 15, 
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSWk0XputOf91H9c-cSSEtEbYKIB7g1HCocw&usqp=CAU",
      description: "A cool tee for the ~coolest pop~",
      stock: 40,
      tags: ["t-shirt", "tshirt", "father's day", "clothing", "mens shirt", "tee"],
      type: "Clothing-Jewelry"
  },
  

]


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

    return  {
      title:product.title,
      price: product.price,
      image: product.image,
      description: product.description,
      stock: product.stock,
      tags: product.tags,
      category: product.category
    }
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
}


 productInit()




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
  {
    title: "Red High Heels",
    price: 60,
    image: "https://thumbs.dreamstime.com/b/red-high-heel-shoes-pair-isolated-white-background-41435176.jpg",
    description: "Perfect for going out",
    stock: 20,
    tags: ["shoe", "heels", "women's", "going out"],
    type: "Shoes"
  },
  {
    title: "Men's Black Dress Shoes",
    price: 100,
    image: "https://cdn.shopify.com/s/files/1/1246/8109/products/DSC00410_fa4a0249-24f9-4283-93d2-bf2dcf3fdb9d_large.jpg?v=1484151950",
    description: "A nice pair of shoes to wear in a meeting, when going out, or on a date",
    stock: 10,
    tags: ["shoe", "men's", "father's day", "going out", "staff pick"],
    type: "Shoes"
  },
  {
    title: "Football Cleats",
    price: 90,
    image: "https://static8.depositphotos.com/1049549/878/i/600/depositphotos_8783239-stock-photo-football-boots-soccer-boots.jpg",
    description: "Nice sleek looking cleats for playing football. Very durable",
    stock: 50,
    tags: ["shoe", "cleats", "men's", "football", "sport"],
    type: "Shoes"
  },
  {
    title: "Yellow High Heels",
    price: 230,
    image: "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    description: "A nice pair of heels that comes with a bow on top",
    stock: 3,
    tags: ["heels", "shoe", "women's", "going out", "cute"],
    type: "Shoes"
  },
  {
    title: "Gym Shoes",
    price: 70,
    image: "https://media.gettyimages.com/photos/sport-shoes-isolated-on-white-background-picture-id1023642306?s=612x612",
    description: "A pair of shoes to wear at the gym",
    stock: 30,
    tags: ["gym", "shoe", "shoes", "men's'", "athletic"],
    type: "Shoes"
  },
  {
    title: "Men's Brown Dress Shoe",
    price: 150,
    image: "https://media.istockphoto.com/photos/brogues-from-above-picture-id145853626?k=6&m=145853626&s=612x612&w=0&h=SKTt57PXp30PYxoh3BeciQljjm-kDMY-krQpVvA9X5w=",
    description: "Strong pair of shoes to show you mean buisness in your next meeting",
    stock: 20,
    tags: ["men's", "dress shoes", "shoe", "shoes", "work", "father's day"],
    type: "Shoes"
  },
  {
    title: "High Heel Wedge",
    price: 80,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHcxU9-0h6px2jSX6jinb0GjApTTaYxM85XEvY4L6p7COwKFq6j1GxOoOs4aFQ-Hkheb8&usqp=CAU",
    description: "A cool looking pair of wedges you can wear to the beach or when going out",
    stock: 15,
    tags: ["wedges", "shoe", "heels", "women's", "going out", "beach", "staff pick"],
    type: "Shoes"
  },
  {
    title: "Women's Sandal",
    price: 55,
    image: "https://i.ebayimg.com/images/g/Tf8AAOSwZZdbbfkh/s-l640.jpg",
    description: "Perfect for wearing when at the beach or just being lazy",
    stock: 43,
    tags: ["shoe", "shoes", "sandals", "sandal", "beach", "lazy", "women's"],
    type: "Shoes"
  },
  {
    title: "Men's Oxford Dress Shoe",
    price: 200,
    image: "https://media.istockphoto.com/photos/brown-leather-male-oxfords-shoes-picture-id1205024437?k=6&m=1205024437&s=612x612&w=0&h=JYm8Cs5L0kSWn9rBSFiUIPd9Zh7L2casvuu8Lnpfudw=",
    description: "The quintessential shoe to tie your outfit together",
    stock: 50,
    tags: ["shoe", "oxford", "men's", "buisness"],
    type: "Shoes"
  },
  {
    title: "Baseball Cleats",
    price: 100,
    image: "https://media.istockphoto.com/photos/baseball-cleats-picture-id183827271?k=6&m=183827271&s=612x612&w=0&h=1MJgQcIKI_4uKM52w44aEAA74kgyICPMykKqBoFB36o=",
    description: "A durbale pair of cleats to improve your game",
    stock: 92,
    tags: ["cleats", "baseball", "men's", "shoe", "sports"],
    type: "Shoes"
  },
  {
    title: "Jade Earrings",
    price: 1900,
    image: "https://media.istockphoto.com/photos/pair-of-emerald-earrings-isolated-on-white-background-picture-id1145185972?k=6&m=1145185972&s=612x612&w=0&h=S-eBn9mIjo6T85wRaEM0lnoy4PwvAq5Oj_XfxOX68Pc=",
    description: "A pair of earrings with a jade stone in the center that is surrounded by diamonds",
    stock: 50,
    tags: ["earring", "jewelry", "jade", "diamonds", "staff pick", "women"],
    type: "Clothing-Jewelry"
  },
  {
    title: "Emerald and Diamond Necklace",
    price: 44000,
    image: "https://bnsec.bluenile.com/bluenile/is/image/bluenile/-emerald-diamond-pendant-18k-white-gold-/59122c_main?$phab_detailmain$",
    description: "This necklace showcases two vibrant green emeralds surrounded by diamonds",
    stock: 3,
    tags: ["necklace", "luxury", "women's", "diamonds", "emerald", "jewelry"],
    type: "Clothing-Jewelry"
  },
  {
    title: "Gaming Headphones",
    price: 300,
    image: "https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg",
    description: "Top quality gaming headphones. Noise cancelling. ",
    stock: 156,
    tags: ["gaming", "gamer", "headphones", "electronics",],
    type: "Electronics"
  },
  {
    title: "Bluetooth Speaker",
    price: 125,
    image: "https://thumbs.dreamstime.com/b/listening-music-red-speaker-bluetooth-portable-red-speaker-bluetooth-portable-white-backgroud-selective-focus-blurry-185106167.jpg",
    description: "Play this speaker wherever you are, whether it be in your home or lounging by the pool",
    stock: 500,
    tags: ["bluetooth", "electronics", "speaker", "staff pick"],
    type: "Electronics"
  },
  {
    title: "Camera",
    price: 950,
    image: "https://t3.ftcdn.net/jpg/00/52/45/32/360_F_52453293_qGCRFdf6nEkCLjBuRIHQIQMOOaYmgNpN.jpg",
    description: "One of the best cameras on the market for taking outdoor photos",
    stock: 854,
    tags: ["camera", "electronics", "nature", "outdoors"],
    type: "Electronics"
  },
  {
    title: "Televison",
    price: 1000,
    image: "https://media.istockphoto.com/photos/with-two-clipping-paths-picture-id173240143?k=6&m=173240143&s=612x612&w=0&h=uMxIEsR8xewoRQjnm7Pz51LzMV_KNJel_KuIfdnGUZs=",
    description: "High quality TV to enjoy all your shows, movies and games on",
    stock: 375,
    tags: ["tv", "electronics", "entertainment"],
    type: "Electronics"
  },
  {
    title: "Smart Watch",
    price: 550,
    image: "https://cdn.jazp.com/uploads/202007/8b5ed828fa24d099cc2cdd7451ba10ab.jpeg",
    description: "This watch is made to help you keep track of your blood pressure and heart rate",
    stock: 700,
    tags: ["watch", "smart watch", "health", "electronics", "father's day", "running"],
    type: "Electronics"
  },
  {
    title: "Shampoo",
    price: 30,
    image: "https://images.stockfreeimages.com/2028/sfi226w/20280817.jpg",
    description: "Great for that silky smooth look",
    stock: 645,
    tags: ["shampoo", "beauty", "hair", "silky", "bounce"],
    type: "Beauty"
  },
  {
    title: "Lotion",
    price: 50,
    image: "https://image.freepik.com/free-photo/high-angle-cosmetics-lotion_23-2148532818.jpg",
    description: "Lotion to give your skin that baby soft feeling",
    stock: 532,
    tags: ["skin care", "soft", "lotion", "beauty", "staff pick"],
    type: "Beauty"
  },
  {
    title: "Skin Cleanser",
    price: 80,
    image: "https://t4.ftcdn.net/jpg/04/30/74/53/360_F_430745362_PxrAyOYZCO0nj5iWo3ZmCftyLEDj13WG.jpg",
    description: "A new type of cleanser to help keep your face clear of any dirt or other irritants",
    stock: 236,
    tags: ["skin cleanser", "beauty", "face", "face wash", "men's", "women's"],
    type: "Beauty"
  },
  {
    title: "Beard Oil",
    price: 55,
    image: "https://cranes-country-store.com/wp-content/uploads/2020/04/LEAD_19d5f9e1-58b6-4086-a29f-22b077f122cb_2048x.jpg",
    description: "The best damn beard oil that you can find",
    stock: 430,
    tags: ["oil", "beard", "beard oil", "men's", "beauty"],
    type: "Beauty"
  },
  {
    title: "Vitamins",
    price: 25,
    image: "https://st.depositphotos.com/3241943/4520/i/600/depositphotos_45202029-stock-photo-oval-shape-of-soft-gelatin.jpg",
    description: "Take these to improve your skin's glow",
    stock: 2000,
    tags: ["vitamins", "health", "beauty", "skin glow"],
    type: "Beauty"
  },
  {
    title: "Razor",
    price: 34,
    image: "https://media.istockphoto.com/photos/old-classic-straight-razor-picture-id176847493?k=6&m=176847493&s=612x612&w=0&h=0H8kAh_OMZqPkKrs_J4TrURAQaw9e3h3gmIr6BIiHAM=",
    description: "Old school barber razor to give you a super close shave",
    stock: 1234,
    tags: ["razor", "shave", "beard", "single blade", "beauty", "men's"],
    type: "Beauty"
  },
  {
    title: "Shaving Brush",
    price: 5,
    image: "http://sc04.alicdn.com/kf/H4dd5c39cf3d34499a655ea38620d79aa8.jpg",
    description: "A fine tipped badger hair brush to help lather your shaving cream on your face",
    stock: 547,
    tags: ["shave", "shaving brush", "men's", "badger hair", "beauty", "fine tipped", "shaving kit", "father's day"],
    type: "Beauty"
  },
  {
    title: "Makeup Brushes",
    price: 17,
    image: "https://images.unsplash.com/photo-1587754256282-a11d04e3472d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bWFrZXVwfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    description: "Different brushes for different uses",
    stock: 720,
    tags: ["makeup", "brushes", "beauty", "women's"],
    type: "Beauty"
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



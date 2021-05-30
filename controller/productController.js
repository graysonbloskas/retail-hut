const db = require("../models")

module.exports = {
findAll: function(req, res) {
    db.Product
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
findById: function(req, res) {
    // db.WishList
    //   .findById(req.params.id)
      // .then(dbModel => res.json(dbModel))
      // .catch(err => res.status(422).json(err));
      const dummyData = [

        {
            title: "Yellow Tee Shirt",
            price: 10, 
            image: "https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg",
            description: "A yellow shirt, made of polyester",
            stock: 10,
            category: "Clothing-Jewelry",
            shop: {
                name: "SticersByBrandi",
                href: "https://stickersbybrandi.com"
            }
        },
        {
            title: "Red Dress",
            price: 15, 
            image: "https://fnug.com/wp-content/uploads/what-nail-colour-goes-best-with-red-dress.jpg",
            description: "high heels, Red dress, RED DRREsss",
            stock: 10,
            category: "Clothing-Jewelry",
            shop: {
                name: "SticersByBrandi",
                href: "https://stickersbybrandi.com"
            }
        },
        {
            title: "Blue Tee",
            price: 5, 
            image: "https://imgs.michaels.com/MAM/assets/1/726D45CA1C364650A39CD1B336F03305/img/893E44B4248847338CD88E85BD79D361/10186027_r.jpg?fit=inside|540:540",
            description: "A blue tee",
            stock: 10,
            category: "Electronics",
            shop: {
                name: "SticersByBrandi",
                href: "https://stickersbybrandi.com"
            }
        },
        {
            title: "Men's Wristwatch",
            price: 50, 
            image: "https://cdn.shopify.com/s/files/1/0627/5517/products/ChronoSBlue_Brown_1000x.jpg?v=1611165666",
            description: "An elegant Men's wristwatch",
            stock: 20,
            category: "Beauty",
            shop: {
                name: "SticersByBrandi",
                href: "https://stickersbybrandi.com"
            }
        },
        {
            title: "PS4 Controller",
            price: 55, 
            image: "https://cdn10.bigcommerce.com/s-ksslwy/products/3238/images/8290/PS4_GreenSoft__86916.1559242522.1280.1280.png?c=2",
            description: "A controller for your ps4",
            stock: 10,
            category: "Electronics",
            shop: {
                name: "SticersByBrandi",
                href: "https://stickersbybrandi.com"
            }
        }];
        res.json(dummyData);
  },
}
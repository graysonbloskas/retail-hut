const router = require("express").Router();
//can get all 4 by requiring index
//destructed
const {Category, Product, Shop, User} = require("../models/index");

// This route creates a new category.
router.post("api/category", ({ body }, res) => {
    Category.create(body)
    .then(dbCategory => {
        res.json(dbCategory);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//get all categories
router.get("/api/category", (req, res) => {
    Category.find({})
    .then(dbCategory => {
        res.json(dbCategory);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//no collection called index, needs to be removed.
// router.post("api/index", ({ body }, res) => {
//     index.create(body)
//     .then(dbIndex => {
//         res.json(dbIndex);
//     })
//     .catch(err => {
//         res.status(400).json(err);
//     });
// });

//creates new product
router.post("api/product", ({ body }, res) => {
    Product.create(body)
    .then(dbProduct => {
        res.json(dbProduct);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//get all products ***
router.get("/api/product", (req, res) => {
    Product.find({})
    .then(allProducts => {
        res.json(allProducts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//get product by id ***
router.get("/api/product/:id", (req, res) => {
    Product.find({_id: req.params.id})
    .then(product => {
        res.json(product);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//get all products by shop..Added with tutor
//catergory._id is taking all the products and filtering them by their Ids.
//route should get all products that match particular cat id.
router.get("api/product/category/:id", (req, res) => {
    Product.find({})
    .then(allProducts => {
        const filteredProducts = allProducts.filter(p => {
            const categoryIds = p.category.map(c => c._id);
            return categoryIds.includes(req.params.id);
        });
        res.json(filteredProducts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//route should get all products that match particular shop id.
router.get("api/product/shop/:id", (req, res) => {
    Product.find({})
    .then(allProducts => {
        const filteredProducts = allProducts.filter(p => {
            const shopIds = p.shop.map(c => c._id);
            return shopIds.includes(req.params.id);
        });
        res.json(filteredProducts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//creates a new shop
router.post("api/shop", ({ body }, res) => {
    Shop.create(body)
    .then(dbShop => {
        res.json(dbShop);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//getting all shops
router.get("/api/shop", (req, res) => {
    Shop.find({})
    .then(dbShop => {
        res.json(dbShop);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

//creates a new user
router.post("api/user", ({ body }, res) => {
    User.create(body)
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
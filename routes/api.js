const router = require("express").Router();
const catergory = require("../models/category");
const index = require("../models/index");
const product = require("../models/product");
const shop = require("../models/shop");
const user = require("../models/user");

router.post("api/catergory", ({ body }, res) => {
    catergory.create(body)
    .then(dbCatergory => {
        res.json(dbCatergory);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("api/index", ({ body }, res) => {
    index.create(body)
    .then(dbIndex => {
        res.json(dbIndex);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("api/product", ({ body }, res) => {
    product.create(body)
    .then(dbProduct => {
        res.json(dbProduct);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("api/shop", ({ body }, res) => {
    shop.create(body)
    .then(dbShop => {
        res.json(dbShop);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.get("/api/shop", (req, res) => {
    shop.find({})
    .then(dbShop => {
        res.json(dbShop);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

router.post("api/user", ({ body }, res) => {
    user.create(body)
    .then(dbUser => {
        res.json(dbUser);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
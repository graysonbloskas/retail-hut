const router = require("express").Router();
const shopController = require("../../controller/shopController")

router.route("/")
    .get(shopController.findShopProducts)
    

// router
//     .route("/:category")
//     .get(shopController.findByCategory)
    

module.exports = router;
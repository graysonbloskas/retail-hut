const router = require("express").Router();
const productController = require("../../controller/productController");

router.route("/")
    .get(productController.findAll)
    .post(productController.create);
    
module.exports = router;
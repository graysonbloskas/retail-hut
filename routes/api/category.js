const router = require("express").Router();
const categoryController = require("../../controller/categoryController")

router.route("/")
    .get(categoryController.findByAllCategories)
    

    module.exports = router;
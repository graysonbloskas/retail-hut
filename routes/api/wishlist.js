const router = require("express").Router();
const WishListController = require("../../controller/WishListController")

router.route("/")
  .get(WishListController.findAll)


module.exports = router;
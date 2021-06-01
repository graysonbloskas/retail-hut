const router = require("express").Router();
const WishListController = require("../../controller/WishListController");


router.route("/")
  .get(WishListController.findAll)
  .post(WishListController.create);

// Matches with "/api/wishlist/:id"
router
  .route("/:id")
  .get(WishListController.findById)
  .put(WishListController.update)
  .delete(WishListController.remove);

module.exports = router;
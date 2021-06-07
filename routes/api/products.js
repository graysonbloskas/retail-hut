const router = require("express").Router();
const productController = require("../../controller/productController")

router.route("/")
    .get(productController.findAll)

router.route("/:category")
    .get(productController.findByCategory)

// router.route("/:_id")
// .get(productController.findByProductId)

// router.get('/:id', async (req, res) => {
//     const product = await Product.findOne({ _id: req.params.id });
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ message: 'Product Not Found.' });
//     }
//   });


module.exports = router;
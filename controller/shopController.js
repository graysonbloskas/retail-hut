const db = require("../models");

module.exports = {
  findShopProducts: function (req, res) {
    console.log(req, "looking for the shops");
    db.Shop.find()
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },
};

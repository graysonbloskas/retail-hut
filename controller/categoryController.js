const db = require("../models")

module.exports = {

findByAllCategories: function(req, res) {
    db.Category.find({})
    .then(data => {
        res.json(data)
    }) .catch (err => {
        console.log(err)
        res.json(err)
    })
  },

}
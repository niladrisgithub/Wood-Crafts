const Shopper = require('../models/shopper');

module.exports = {
    index,
}

function index(req, res) {
    Shopper.find({}, function(err, shoppers) {
        res.render('woodCraft/cart', {
            shoppers,
            user: req.user
        })
    })
}
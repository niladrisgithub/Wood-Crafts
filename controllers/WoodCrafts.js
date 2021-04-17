const WoodCraft = require('../models/WoodCraft');

module.exports = {
    index,
};

function index(req, res){
    WoodCraft.find({}, function(err, woodCrafts){
        res.render('woodCrafts/index', { title: 'All Crafts', woodCrafts});
    });
}
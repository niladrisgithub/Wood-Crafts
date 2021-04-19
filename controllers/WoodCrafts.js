const WoodCraft = require('../models/WoodCraft');

module.exports = {
    index,
    newCraft,
    create,
};

function index(req, res){
    WoodCraft.find({}, function(err, woodCrafts){
        res.render('/index', { title: 'All Crafts', woodCrafts});
    });
}

function newCraft(req, res) {
    res.render('/new', {title: 'Add Craft'});
}

function create(req, res){
    console.log(req.body)
   WoodCraft.create(req.body, function( err, woodCraft){
       if(err) return res.redirect('/new');
       res.redirect('/requested');
   }); 
}
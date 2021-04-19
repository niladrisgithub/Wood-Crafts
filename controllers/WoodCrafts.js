const WoodCraft = require('../models/WoodCraft');

module.exports = {
    new: newCraft,
    index,
    create,
};

function newCraft(req, res) {
    res.render('/woodCrafts/new', {title: 'Add Craft'});
}

function create(req, res){
    console.log(req.body)
   WoodCraft.create(req.body, function( err, woodCraft){
       if(err) return res.redirect('/woodCrafts/new');
       res.redirect('/requested');
   }); 
}

function index(req, res){
    WoodCraft.find({}, function(err, woodCrafts){
        res.render('/index', { title: 'All Crafts', woodCrafts});
    });
}




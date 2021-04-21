const WoodCraft = require('../models/WoodCraft');

module.exports = {
    new: newCraft,
    index,
    create,
    del,
};

function newCraft(req, res) {
    res.render('woodCrafts/new', {title: 'Request Crafts'});
}

function create(req, res){
    console.log(req.body)
   WoodCraft.create(req.body, function( err, woodCraft){
       if(err) return res.redirect('/woodCrafts/new');
       res.redirect('woodCrafts/');
   }); 
}

function index(req, res){
    WoodCraft.find({}, function(err, woodCrafts){
        res.render('woodCrafts/', { title: 'All Crafts', woodCrafts});
    });
}

function del(req, res){
    req.woodCrafts.pull(req.params.id);
    req.save(function(err){
        res.redirect('woodCrafts/')
    })
}



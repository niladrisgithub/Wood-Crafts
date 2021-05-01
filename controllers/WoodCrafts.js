const WoodCraft = require('../models/WoodCraft');

module.exports = {
    new: newCraft,
    index,
    create,
    gallery,
    cart,
    del,
    update,
    edit,
    buy,
   
};

function newCraft(req, res) {
    res.render('woodCrafts/new', {title: 'Request Crafts'});
}

function create(req, res){
   WoodCraft.create(req.body, function( err, woodCraft){
       if(err) return res.redirect('/woodCrafts/new');
       res.redirect('woodCrafts/');
   }); 
}

function index(req, res){
    WoodCraft.find({}, function(err, woodCrafts){
        res.render('woodCrafts/', { title: 'Home', woodCrafts});
    });
}


function edit(req, res){
    WoodCraft.findById(req.params.id, function(err, woodCraft){
        res.render('woodCrafts/edit', {title: 'Edit', woodCraft})
    });
    
}


function del(req, res) {
    WoodCraft.findByIdAndDelete(req.params.id, function(err, woodCrafts) {
        console.log(req.params.id, woodCrafts, err)
        res.redirect('/woodCrafts');
    })
}


function create(req, res){
    WoodCraft.create(req.body, function(err, woodCraft){
        if(err) return res.redirect('/woodCrafts/new');
        res.redirect('woodCrafts/');
    }); 
 }

function update(req, res){
    WoodCraft.findByIdAndUpdate(req.params.id, req.body, function(err, woodCraft){
        res.redirect('/woodCrafts');
        });
    }


function gallery(req, res){
    WoodCraft.find({}, function(err, woodCrafts){
        res.render('woodCrafts/gallery', { title: 'Gallery', woodCrafts});
    });
}

function cart(req, res){
    WoodCraft.find({}, function(err, woodCrafts){
        res.render('woodCrafts/cart', { title: 'Cart', woodCrafts});
    })
}

function buy(req, res){
    WoodCraft.findById(req.params.id, function(err, woodCrafts){
        res.render('woodCrafts/cart', {title: 'Cart', woodCrafts})
    })
}
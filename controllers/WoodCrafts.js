const WoodCraft = require('../models/WoodCraft');

module.exports = {
    new: newCraft,
    index,
    create,
    del,
    update,
    edit,
    gallery,
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
        res.render('woodCrafts/', { title: 'Home', woodCrafts});
    });
}


function edit(req, res){
    WoodCraft.findById(req.params.id, function(err, woodCraft){
        console.log(req.params.id, woodCraft, err)
        res.render('woodCrafts/edit', {title: 'Edit', woodCraft})
    });
    
}


function del(req, res) {
    WoodCraft.findByIdAndDelete(req.params.id, function(err, woodCrafts) {
        console.log(req.params.id, woodCrafts, err)
        res.redirect('/woodCrafts');
    })
}



function gallery(req, res){
    WoodCraft.find({}, function(err, woodCrafts){
        res.render('woodCrafts/gallery', {title: 'Gallery'})
    });
}



function update(req, res){
    WoodCraft.findByIdAndUpdate(req.params.id, function(err, woodCraft){
        woodCraft.push(req.body);
        woodCraft.save(function () {
            res.redirect('woodCrafts/');
        });
    })
}
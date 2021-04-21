const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
   
const woodCraftSchema = new Schema({   
    user: {
        
    },
    itemDesired: {
        type: String,
        required: true,
    },
    material: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        min: 10,
        max: 9999,
    }
}, {timestamps: true
    
});

module.exports = mongoose.model('WoodCraft', woodCraftSchema)
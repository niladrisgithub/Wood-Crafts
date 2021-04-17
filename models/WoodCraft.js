const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const requestSchema = new Schema({
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
        required: true,
    }
}, {timestamps: true
    
});
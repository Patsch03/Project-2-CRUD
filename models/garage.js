const mongoose = require('mongoose');
//optional shortcut

const Schema = mongoose.Schema

const itemSchema = new Schema
({
    name: String,
    price: Number,
    description: String,
    purchased: {type: Boolean, default: false}

},{
    timestamps: true
})

const cartSchema = new Schema
({
    items: [itemSchema], // cant push to undefined array 

},{
    timestamps: true
})




// module.exports = mongoose.model
// ("Item", itemSchema);

module.exports = mongoose.model
("Cart", cartSchema);

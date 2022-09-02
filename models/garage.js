const mongoose = require('mongoose');
//optional shortcut

const Schema = mongoose.Schema

const itemSchema = new Schema
({
    name: String,
    price: Number,
    description: String,
    purchased: {type: Boolean, default: false},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String,
    

},{
    timestamps: true
})

const cartSchema = new Schema
({
    items: [itemSchema],

},{
    timestamps: true
})

module.exports = mongoose.model
("Cart", cartSchema);

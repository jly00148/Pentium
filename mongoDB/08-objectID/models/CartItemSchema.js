const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
    count:{
        type:Number,
        default:1
    },
    totalPrice:{
        type:Number,
        default:0
    },
    checked:{
        type:Boolean,
        default:true
    }
});

const CartItem = mongoose.model('CartItem',CartItemSchema);

module.exports = CartItem;
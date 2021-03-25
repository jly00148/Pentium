const mongoose = require('mongoose');
const CartItemSchema = require('./CartItemSchema.js');

const CartSchema = new mongoose.Schema({
  cartList:{
    type:[CartItemSchema]
  },
  allChecked:{
    type:Boolean,
    default:true
  },
  totalCartPrice:{
    type:Number,
    default:0
  }
})

const Cart = mongoose.model('cart',CartSchema);

module.exports = Cart;
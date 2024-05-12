
const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', 
    required: true,
    },
    products: [
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true,
    },
    ],
    totalAmount: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered'],
    default: 'pending',
  },
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

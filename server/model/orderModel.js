const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true
        },
        quantity: {
          type: Number,
          required: true,
          min: 1
        }
      }
    ],
    totalPrice: {
      type: Number,
      required: true,
      min: 0
    },
    paid: {
      type: Boolean,
      default: false
    },
    shippingAddress: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['Pending', 'Shipped', 'Delivered'],
      default: 'Pending'
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);

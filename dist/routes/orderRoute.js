"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _orderModel = _interopRequireDefault(require("../models/orderModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

router.get("/", async (req, res) => {
  const orders = await _orderModel.default.find({}).populate('user');
  res.send(orders);
}); //router.get("/mine", async (req, res) => {
//const orders = await Order.find({ user: req.user._id });
//res.send(orders);
//});

router.get("/:id", async (req, res) => {
  const order = await _orderModel.default.findOne({
    _id: req.params.id
  });

  if (order) {
    res.send(order);
  } else {
    res.status(404).send("Order not Found");
  }
});
router.delete("/:id", async (req, res) => {
  const order = await _orderModel.default.findOne({
    _id: req.params.id
  });

  if (order) {
    const deletedOrder = await order.remove();
    res.send(deletedOrder);
  } else {
    res.status(404).send("Order not Found");
  }
});
router.post("/", async (req, res) => {
  const newOrder = new _orderModel.default({
    orderItems: req.body.orderItems,
    //user: req.user.id,
    shipping: req.body.shipping,
    payment: req.body.payment,
    itemsPrice: req.body.itemsPrice,
    taxPrice: req.body.taxPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice
  });
  const newOrderCreated = await newOrder.save();
  res.status(201).send({
    message: "New Order Created",
    data: newOrderCreated
  });
});
router.put(":id/pay", async (req, res) => {
  const order = await _orderModel.default.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.payment = {
      paymentMethod: 'paypal',
      paymentResult: {
        payerId: req.body.payerId,
        orderId: req.body.orderId,
        paymentId: req.body.paymentId
      }
    };
    const updatedOrder = await order.save();
    res.send({
      message: 'Order Paid',
      order: updatedOrder
    });
  } else {
    res.status(404).send({
      message: 'Order not found'
    });
  }
});
var _default = router;
exports.default = _default;
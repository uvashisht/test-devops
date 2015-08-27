var express = require('express');
var router = express.Router();

var Order = require("./../models/Order");

// get the orders
router.get('/', function(req, res, next){
    Log.i("return the list of orders");
    Order.find(function (err, orders) {
        if (err) return next(err);
        res.status(200).json(orders);
    });
});

// get order by id
router.get('/:id', function(req, res, next) {
    Log.i("get order by id "+req.params.id);
    Order.findById(req.params.id, function (err, order) {
        if (err) return next(err);
        res.status(200).json(order);
    });
});

// create a new order
router.post('/', function(req, res, next) {
    Log.i("create a new order");
    Order.create(req.body, function (err, order) {
        if (err) return next(err);
        res.status(201).json(order);
    });
});

//update an order
router.put('/:id', function(req, res, next) {
    Log.i("update the order with id "+req.params.id);
    Order.findByIdAndUpdate(req.params.id, req.body, function (err, order) {
        if (err) return next(err);
        res.status(202).json(order);
    });
});

//delete an order
router.delete('/:id', function(req, res, next) {
    Log.i("delete the order with id "+req.params.id);
    Order.findByIdAndRemove(req.params.id, req.body, function (err, order) {
        if (err) return next(err);
        res.status(204).json(order);
    });
});

module.exports = router;
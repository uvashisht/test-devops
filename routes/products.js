var express = require('express');
var router = express.Router();

var Product = require("./../models/Product");

// get the products
router.get('/', function(req, res, next){
    Log.i("return the list of products");
    Product.find(function (err, products) {
        if (err) return next(err);
        res.status(200).json(products);
    });
});

// get the product with given id
router.get('/:id', function(req, res, next) {
    Log.i("get product by id "+req.params.id);
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.status(200).json(product);
    });
});

// create a new product
router.post('/', function(req, res, next) {
    Log.i("create a new product");
    Product.create(req.body, function (err, product) {
        if (err) return next(err);
        res.status(201).json(product);
    });
});

//update a product
router.put('/:id', function(req, res, next) {
    Log.i("update the product with id "+req.params.id);
    Product.findByIdAndUpdate(req.params.id, req.body, function (err, product) {
        if (err) return next(err);
        res.status(200).json({
            "success" : "updated the product"
        });
    });
});

// delete a product
router.delete('/:id', function(req, res, next) {
    Log.i("delete the product with id "+req.params.id);
    Product.findByIdAndRemove(req.params.id, req.body, function (err, product) {
        if (err) return next(err);
        res.status(200).json({
            "success" : "deleted the product"
        });
    });
});

module.exports = router;
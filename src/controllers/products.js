const { response } = require('express');

const getProduct = (req, res) => {

    const product = req.params.product;
    
    
    const { products } = require('../database/products.json')

    let objProduct = products.find( row => {
        return row.id == product
    });

    const objStock = require('../database/products_stock.json')
    let objSize = objStock.stock.find( stock => {
        return stock.id_product == product
    });

    objProduct.size = objSize;

    res.status(200).json( objProduct );
    
};

const getProducts = (req, res) => {
    
    const page = req.params.page;
    const rowMax = page * 10;
    const rowMin = rowMax - 10;
    const { products } = require('../database/products.json')

    let pageProducts = [];
    for( let i = rowMin; i < rowMax; i++ ){
        if( products[i] ) pageProducts.push(products[i])
    }

    res.status(200).json(pageProducts);

};

const getProductsCart = (req, res) => {
    
    const reqProducts = req.params.products.split(',');
    const { products } = require('../database/products.json');

    const cartProduct = [];

    reqProducts.map( row => {
        
        products.map( product => {
        
            if( product.id == row ){
                cartProduct.push(product)
            }
            
        });
        
    });

    res.status(200).json(cartProduct);

};

const getProductsStock = (req, res) => {

    const product = req.params.product;
    
    const objStock = require('../database/products_stock.json')
    let objSize = objStock.stock.find( stock => {
        return stock.id_product == product
    });

    res.status(200).json( objSize );
    
};

module.exports = {
    getProduct,
    getProducts,
    getProductsStock,
    getProductsCart
}
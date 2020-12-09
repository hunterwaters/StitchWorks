const request = require('supertest');
var app = require('../backend/server');
const chai = require('chai');
const express = require('express');

describe('GET list of products', () => {
    it('gets a list of products', () => {
        request(app)
        .get('/api/product')
        .expect({
            products: [
                {
                    "name": 'Long Pants',
                    "category": "Pants",
                    "image": '/images/d1.jpg',
                    "price": 50,
                    "brand": "Nike",
                    "numReviews": 0,
                    "countInStock": 1
                },
                {
                    "name": 'Cool Shirt',
                    "category": "Shirts",
                    "image": '/images/d1.jpg',
                    "price": 200,
                    "brand": "Gucci",
                    "numReviews": 0,
                    "countInStock": 2
            },
            {
                "name": 'Cool Pants',
                    "category": "Pants",
                    "image": '/images/d1.jpg',
                    "price": 100,
                    "brand": "Adidas",
                    "numReviews": 0,
                    "countInStock": 5
            },
        ]
        })
        .expect(200)
    });
});

describe('GET product by ID', () => {
    it('product by ID', () => {
        request(app)
        .get('/api/product/5fd06e4a7f9c134188132e22')
        .expect({
            "name": 'Long Pants',
                    "category": "Pants",
                    "image": '/images/d1.jpg',
                    "price": 50,
                    "brand": "Nike",
                    "numReviews": 0,
                    "countInStock": 1
        })
        .expect(200)
    });
});

describe('PUT edit a product', () => {
    it(' edit product by ID', () => {
        request(app)
        .put('/api/product/5fd06e4a7f9c134188132e22')
        .send({
            "name": 'Long Pants',
                    "category": "Pants",
                    "image": '/images/d1.jpg',
                    "price": 50,
                    "brand": "Nike",
                    "numReviews": 0,
                    "countInStock": 1
        })
        .send({
            "price": 100
        })
        .expect({
            "name": 'Long Pants',
                    "category": "Pants",
                    "image": '/images/d1.jpg',
                    "price": 100,
                    "brand": "Nike",
                    "numReviews": 0,
                    "countInStock": 1
        })
        .expect(200)
    });
});

describe('DELETE product', () => {
    it('delete product by ID', () => {
        request(app)
        .delete('/api/product/5fd06e4a7f9c134188132e22')
        .expect(200)
    });
});

describe('POST a new product', () => {
    it('new product', () => {
        request(app)
        .post('/api/product')
        .send({
                "name": 'Awesome Pants',
                    "category": "Pants",
                    "image": '/images/d1.jpg',
                    "price": 500,
                    "brand": "Puma",
                    "numReviews": 0,
                    "countInStock": 5
        })
        .expect(201)
    });
});



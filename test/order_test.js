const request = require('supertest');
var app = require('../server');
const chai = require('chai');
const express = require('express');

describe('GET list of orders', () => {
    it('get list of orders', () => {
        request(app)
        .get('/api/orders')
        .expect({
            "shipping": {
                "address": "103 12th avenue",
                "city": "Seattle",
                "postalCode": "98122",
                "country": "United States"
            },
            "payment": {
                "paymentMethod": "paypal"
            },
            "isPaid": false,
            "isDelivered": false,
            "_id": "5fd06fde7f9c134188132e23",
            "orderItems": [],
            "itemsPrice": 100,
            "taxPrice": 15,
            "shippingPrice": 0.01,
            "totalPrice": 115.01,
            "createdAt": "2020-12-09T06:34:06.535Z",
            "updatedAt": "2020-12-09T06:34:06.535Z",
            "__v": 0},
            {
                "shipping": {
                    "address": "16220 N 7TH ST, APT 2219",
                    "city": "Phoenix",
                    "postalCode": "85022",
                    "country": "United States"
                },
                "payment": {
                    "paymentMethod": "paypal"
                },
                "isPaid": false,
                "isDelivered": false,
                "_id": "5fd116ce6d14844e0db075f7",
                "orderItems": [],
                "itemsPrice": 200,
                "taxPrice": 30,
                "shippingPrice": 0,
                "totalPrice": 230,
                "createdAt": "2020-12-09T18:26:23.010Z",
                "updatedAt": "2020-12-09T18:26:23.010Z",
                "__v": 0
            }
        )
        .expect(200)
    });
});

describe('GET order by ID', () => {
    it('get order by ID', () => {
        request(app)
        .get('/api/orders/5fd06fde7f9c134188132e23')
        .expect({
            "shipping": {
                "address": "103 12th avenue",
                "city": "Seattle",
                "postalCode": "98122",
                "country": "United States"
            },
            "payment": {
                "paymentMethod": "paypal"
            },
            "isPaid": false,
            "isDelivered": false,
            "_id": "5fd06fde7f9c134188132e23",
            "orderItems": [],
            "itemsPrice": 100,
            "taxPrice": 15,
            "shippingPrice": 0.01,
            "totalPrice": 115.01,
            "createdAt": "2020-12-09T06:34:06.535Z",
            "updatedAt": "2020-12-09T06:34:06.535Z",
            "__v": 0
            }
        )
        .expect(200)
    });
});

describe('DELETE order', () => {
    it('delete order by ID', () => {
        request(app)
        .delete('/api/order/5fd06fde7f9c134188132e23')
        .expect(200)
    });
});

describe('POST order ', () => {
    it('post  a new order', () => {
        request(app)
        .post('/api/order')
        .send({
            "shipping": {
                "address": "10014 1st avenue",
                "city": "Tacoma",
                "postalCode": "98664",
                "country": "United States"
            },
            "payment": {
                "paymentMethod": "paypal"
            },
            "isPaid": false,
            "isDelivered": false,
            "_id": "5fd06fde7f9c134188132e23",
            "orderItems": [],
            "itemsPrice": 100,
            "taxPrice": 15,
            "shippingPrice": 0.01,
            "totalPrice": 115.01,
            "createdAt": "2020-12-09T06:34:06.535Z",
            "updatedAt": "2020-12-09T06:34:06.535Z",
            "__v": 0
            }
        )
        .expect(201)
    });
});

describe('PUT find an order and edit', () => {
    it('edit order by ID', () => {
        request(app)
        .put('/api/orders/5fd06fde7f9c134188132e23')
        .send({
            "shipping": {
                "address": "103 12th avenue",
                "city": "Seattle",
                "postalCode": "98122",
                "country": "United States"
            },
            "payment": {
                "paymentMethod": "paypal"
            },
            "isPaid": false,
            "isDelivered": false,
            "_id": "5fd06fde7f9c134188132e23",
            "orderItems": [],
            "itemsPrice": 100,
            "taxPrice": 15,
            "shippingPrice": 0.01,
            "totalPrice": 115.01,
            "createdAt": "2020-12-09T06:34:06.535Z",
            "updatedAt": "2020-12-09T06:34:06.535Z",
            "__v": 0
            }
        )
        .expect(201)
    });
});




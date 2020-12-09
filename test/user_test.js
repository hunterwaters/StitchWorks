const request = require('supertest');
var app = require('../backend/server');
const chai = require('chai');
const express = require('express');


describe('PUT users', () => {
    it('gets a users information', () => {
        request(app)
        .put('/api/users/5fd134cf1febfb60f881e253')
        .expect( {
            "id": "5fd134cf1febfb60f881e253",
            "name": "John James",
            "email": "hunterr@example.com",
            "password": "1234"
        } )
        .expect(200)
    });
});

describe('POST user signin', () => {
    it('A user signs in to application', () => {
        request(app)
        .post('/api/user/siginin')
        .send({
            "email": "hunterr@example.com",
            "password": "1234"
        })
        .expect(201)
    });
});

describe('POST register user', () => {
    it('Registers a new user', () => {
        request(app)
        .post('/api/user/register')
        .send({
            "name": "Hunter Waters",
            "email": "hunterr23@example.com",
            "password": "1234",
            "isAdmin": "false"
        })
        .expect(201)
    });
});

describe('GET list of admins', () => {
    it('gets a list of admins', () => {
        request(app)
        .get('/api/user/createadmin')
        .expect({
            "name": "Hunter Waters",
            "email": "hunterr@example.com",
            "password": "1234",
            "isAdmin": "true"
        })
        .expect(200)
    });
});


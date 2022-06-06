const app = require('../src/app');
const request = require('supertest');

describe('UNIT TEST: Get /', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/').send();
        
        expect(response.statusCode).toBe(200);
    });

});

describe('INTEGRATION TEST: Get /products', () => {

    let idFirtsProduct = 0;

    test('should respond with a list of products(10)', async () => {
        const response = await request(app).get('/api/products/list/1').send();
        
        expect(response.body).toHaveLength(10);

        idFirtsProduct = response.body[0].id;


    });

    
    test('should respond with the detail of the firts product from the list called before', async () => {
        const response = await request(app).get('/api/products/'+idFirtsProduct).send();
        
        expect(response.body.id).toEqual(idFirtsProduct);
        
    });
    


});
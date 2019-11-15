const request = require('supertest')
const app = require('./server')
const db = require('../database/dbConfig')

// beforeEach(async () => {
//     await db('users').truncate()
// })

describe('app', () => {
    describe('[POST] / endpoint', () => {
        
        test('should create a new post', async () => {
            const response = await request(app)
              .post('/api/auth/register')
              .send({
                username: 'Doug',
                password: 'Guile'
              })
            expect(response.status).toBe(201)
            expect(response.body).toHaveProperty('username')
          })
    })

    describe('Login', () => {
        it('succeeds with correct credentials', async () => {
          const response = await request(app)
          .post('/api/auth/login')
          .send({
            username: 'Jack',
            password: 'Bauer'
          })
            expect(201);
         });

        it('fails with invalid credentials', () => {
            return request(app)
            .post('/api/auth/login')
            .send({
              username: 'kofi',
              password: 'Baah'
            })
            .expect(401);
         });

        it('fails with missing credentials', async () => {
          const response = await request(app)
          .post('/api/auth/login')
          .send({})
          expect(response.status).toBe(500)
         });
       })
})
const test = require('ava')
const request = require('supertest')
const {app} = require('../../index')

test('POST /calculate succeeds with 200', async (t) => {
  const expression = '3+4*2-1'
  const expectedResponse = {
    expression,
    result: 10
  }
  const response = await request(app)
    .post('/calculate')
    .send({expression: '3+4*2-1'})
    .set('Accept', 'application/json')
  t.is(response.status, 200)
  t.deepEqual(response.body, expectedResponse)
})

test('POST /vizualize-calculation succeeds with 200', async (t) => {
  const expectedResponse = [
    {
      operation: 'draw',
      value: 4,
      transform: [
        {
          operation: 'split',
          value: 2
        }
      ]
    },
    {
      operation: 'draw',
      value: 3,
      transform: []
    },
    {
      operation: 'remove',
      value: 1,
      transform: []
    }
  ]
  const response = await request(app)
    .post('/vizualize-calculation')
    .send({expression: '3+4*2-1'})
    .set('Accept', 'application/json')
  t.is(response.status, 200)
  t.deepEqual(response.body, expectedResponse)
})
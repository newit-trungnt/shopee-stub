const Koa = require('koa')
const router = require('koa-router')()
const logger = require('koa-logger')

// import data
const orderList = require('./data/orders/orders-list.json')
const orderDetails = require('./data/orders/order-details.json')

const app = new Koa()

app.use(logger())

router.get('/status', (ctx) => (ctx.body = 'OK'))

router.post('/api/v1/orders/basics', function (ctx) {
  ctx.body = orderList
})

router.post('/api/v1/orders/detail', function (ctx) {
  ctx.body = orderDetails
})

app.use(router.routes())

app.listen(3000, () => console.log('App is running on port 3000'))

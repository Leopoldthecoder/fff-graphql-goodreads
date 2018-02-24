const Koa = require('koa')
const KoaRouter = require('koa-router')
const koaBody = require('koa-bodyparser')
const apolloKoa = require('apollo-server-koa')
const { graphqlKoa, graphiqlKoa } = apolloKoa
const schema = require('./schema')

const app = new Koa()
const router = new KoaRouter()
const PORT = 3000

router.post('/graphql', koaBody(), graphqlKoa({ schema }));
router.get('/graphql', graphqlKoa({ schema }))
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }))

app.use(router.routes())
app.use(router.allowedMethods())
app.listen(PORT)

console.log(`Listening on port ${PORT}...`)
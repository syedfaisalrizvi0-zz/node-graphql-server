var express = require('express');
var express_graphql = require('express-graphql');
var routes = require('./app/routes/routes');
app = express();
routes(app,express_graphql);
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));
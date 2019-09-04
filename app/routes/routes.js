var schema = require('../schema/graphqlSchema');
module.exports = (app,express_graphql)=>{
    app.use('/graphql', express_graphql({
        schema: schema.schemaone,
        rootValue: schema.rootResolver, 
        graphiql: true
    }));
}

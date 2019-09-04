var { buildSchema } = require('graphql');
var apiController = require('../controllers/apiController');
exports.schemaone = buildSchema(`
type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
},
type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
}
`);
exports.rootResolver = {
    course: apiController.getCourse,
    courses:apiController.getCourses
}
const app = require('../../express/express-server');
const config = require('../../config');
const swaggerJSDoc = require('swagger-jsdoc');
const os = require('os');
// swagger definition
var swaggerDefinition = {
    info: {
        title: 'Node Swagger API',
        version: '1.0.0',
        description: 'Demonstrating how to describe a RESTful API with Swagger',
    },
    host: os.hostname + ':' + config.app.port,
    basePath: '/',
};
// options for the swagger docs
var options = {
    // import swaggerDefinitions
    swaggerDefinition: swaggerDefinition,
    // path to the API docs
    apis: ['./**/routes/*.js', 'routes.js'],// pass all in array 
};
var swaggerSpec = swaggerJSDoc(options);

app.get('/admin/swagger-docs/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

module.exports = swaggerSpec;

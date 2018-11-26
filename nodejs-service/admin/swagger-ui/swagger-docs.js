const path = require('path');
const bodyparser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const app = require('../../express/express-server');
const config = require('../../config');
const swaggerJSDoc = require('swagger-jsdoc');
const os = require('os');

app.use(bodyparser.json({
    strict: false,
}));
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
    apis: [path.resolve(__dirname, '../../server.js')],
    swaggerUrl: 'http://' + os.hostname + ':' + config.app.port + '/admin/v2/api-docs/swagger.json'
};
var swaggerSpec = swaggerJSDoc(options);

app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'redoc.html'));
});

app.get('/admin/v2/api-docs/swagger.json', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
});

app.use('/admin/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));

module.exports = swaggerSpec;

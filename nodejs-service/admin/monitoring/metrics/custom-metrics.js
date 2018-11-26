const pjson = require('../../../package.json');
const swaggerSpec = require('../../swagger-ui/swagger-docs');

const middleware = {
    name: pjson.name,
    version: pjson.version,
    swaggerSpec: swaggerSpec
}

module.exports = middleware;

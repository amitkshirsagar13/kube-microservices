const app = require('../../express/express-server');
const middleware = require('./metrics/custom-metrics');
const swStats = require('swagger-stats');
middleware.uriPath = '/admin/swagger-stats';

app.use(swStats.getMiddleware(middleware));

module.exports = swStats;

const app = require('../../express/express-server');
const swaggerSpec = require('../swagger-ui/swagger-docs');
const swStats = require('swagger-stats');

// app.use(swStats.getMiddleware({ swaggerSpec: swaggerSpec }));

app.use(swStats.getMiddleware({
    uriPath: '/admin/swagger-stats',
    swaggerSpec: swaggerSpec
}));

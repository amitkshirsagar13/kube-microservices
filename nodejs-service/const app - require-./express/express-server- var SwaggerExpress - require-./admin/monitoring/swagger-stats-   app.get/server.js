const app = require('./express/express-server');
var SwaggerExpress = require('./admin/monitoring/swagger-stats');

app.get('/', (req, res) => res.send('Hello World!'));

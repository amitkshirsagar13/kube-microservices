const app = require('./express/express-server');
var querystring = require('querystring');

var SwaggerExpress = require('./admin/monitoring/swagger-stats');

app.get('/', (req, res) => res.send('Hello World!'));

/**
 * @swagger
 * /api/a:
 *   get:
 *     summary: Message from a
 *     description: Returns a message
 *     produces:
 *       - application/json
 *     tags:
 *       - message
 *     parameters:
 *       - name: name
 *         description: Name
 *         in: query
 *         required: false
 *         type: string
 *     responses:
 *       200:
 *         description: displays message from a
 *         schema:
 *           type: object
 *           properties:
 *             message:
 *               type: string
 *               default: 'Added'
 */
app.get('/api/a', (req, res) => {
    res.send({ message: 'Hello ' + req.query.name + '!!!' });
});


app.get('/api/b', (req, res) => res.send('Hello World from B!'));

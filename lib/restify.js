const restify = require('restify');

const server = restify.createServer({
  name: 'Manual Service',
  version: '1.0.0'
});
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', (req, res, next) => {
  res.send(req.params);
  return next();
});

server.post('/api/push', (req, res, next) => {

});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

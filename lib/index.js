const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.headers)
  console.log(req.url)
  console.log(req.method)

  var body = [];
  req
    .on('error', (err) => {
      console.log(err);
    })
    .on('data', (chunk) => {
      body.push(chunk);
    })
    .on('end', () => {
      body = Buffer.concat(body).toString();
      res.setHeader('Content-Type', 'text/html');
      res.setHeader('X-Foo', 'bar');
      res.writeHead(200, {'Content-Type': 'text/plain'});
      console.log('body');
      res.end('ok');
    });
});

server.listen(8000);
console.log('Listening on port 8000');

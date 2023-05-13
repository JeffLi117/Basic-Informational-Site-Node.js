const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  console.log(req.url);

  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;  
    case '/contact-me':
      path += 'contact-me.html';
      res.statusCode = 200;
      break;  
    case '/contact':
      res.setHeader('Location', '/contact-me')
      res.statusCode = 301;
      break;  
    default:
      path += '404.html';
      res.statusCode = 404;
      break;  
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  })
}).listen(8080);
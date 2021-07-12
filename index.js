const http = require('http');
const port = 3000;

//request - информация о запросе
//response - отпарвка ответа

const requestHandler = (request, response) => {
  console.log(`url: ${request.url}`);
  console.log(`method: ${request.method}`);
  console.log(`user-agent: ${request.headers['user-agent']}`);
  console.log(`user-agent: ${request.headers['user-agent']}`);
  // console.log(request.headers);

  response.setHeader('UserId', 1);
  response.setHeader('Content-Type', 'text/html; charset=utf-8;');
  response.write('<h1>Hi, Vitali</h1>');
  response.end();

  console.log(response);

  response.end(request.headers);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something went wrong', err);
  }
  console.log(`Server is listening on ${port}`);
});

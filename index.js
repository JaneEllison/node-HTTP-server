const http = require('http');
const fs = require('fs');

const port = 3000;

const requestHandler = (request, response) => {
  if (request.method === 'POST') {
    let data = '';

    request.on('data', (value) => {
      data += value;
    });

    request.on('end', () => {
      if (data) {
        fs.writeFileSync('data.json', data);

        response.statusCode = 200;
        response.statusMessage = 'Success';
        response.setHeader('Content-Type', 'text/plain');
        response.write(
          `Status code: ${response.statusCode} (${response.statusMessage})`
        );
        response.end();
      } else {
        response.writeHead(400, { 'Content-Type': 'text/plain' });
        response.write(
          `Status code: ${response.statusCode} (${response.statusMessage})`
        );
        response.end();
      }
    });
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something went wrong', err);
  }
  console.log(`Server is listening on ${port}`);
});

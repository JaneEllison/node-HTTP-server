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
        console.log('Success');
      } else {
        //Send failure response with statusCode 400 (Bad Request)
      }
    });

    response.write(`Status code: ${response.statusCode}`);
    response.end();
  }
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Something went wrong', err);
  }
  console.log(`Server is listening on ${port}`);
});

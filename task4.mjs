const http = require("http");
// import http from 'http'
const request = require("request");
// var request = require("request");

const hostname = "localhost";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
  } else if (req.method === 'POST') {
    request("https://jsonplaceholder.typicode.com/posts/1", (error, response, body) => {
      if (error) {
        console.error(error);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Error');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(body);
      }
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

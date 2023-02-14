const http = require('http');
const circleCircumference = require('./circleCircumferenceModule');
const circleArea = require('./circleAreaModule');


http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write(`The circumference of a circle with a radius of 10 is <h1>${circleCircumference(10)}</h1>`)
  res.write(`<br>`)
  res.write(`The area of a circle with a radius of 10 is <h1>${circleArea(10)}</h1>`)
  res.end()
}).listen(8080)

const http = require("http");

http.createServer((req, res) => {
  res.write("Hello, I am on the server now");
  res.end();
}).listen(3001, () => {
  console.log("Server is connected");
});

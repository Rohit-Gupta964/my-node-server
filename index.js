const http = require("http");
const port = process.env.PORT || 3001;
http.createServer((req, res) => {
  res.write("Hello, I am on the server now");
  res.end();
}).listen(port, () => {
  console.log("Server is connected");
});

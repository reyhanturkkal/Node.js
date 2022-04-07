var http = require("http");

const server = http.createServer(function (request, response) {
  if (request.method === "GET") {
    if (request.url === "/") {
      response.write("Home Page");
    } else if (request.url === "/about") {
      response.write("About Page");
    } else {
      response.write("404 NOT FOUND");
    }
  } else {
    switch (request.method) {
      case "POST":
        response.write("Post method");
        break;
      case "PUT":
        response.write("Put method");
        break;
      case "DELETE":
        response.write("Delete method");
        break;
      default:
        response.write("Other method");
        break;
    }
  }

  response.end();
});
server.listen(3000);

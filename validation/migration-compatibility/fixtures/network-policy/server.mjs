import http from "node:http";

let probeCount = 0;

const server = http.createServer((request, response) => {
  if (request.url === "/health") {
    response.end("PERM004_SERVER_HEALTHY_8404\n");
    return;
  }

  if (request.url === "/count") {
    response.end(`${probeCount}\n`);
    return;
  }

  if (request.url === "/probe?token=8404") {
    probeCount += 1;
    response.end("PERM004_NETWORK_REACHED_8404\n");
    return;
  }

  response.statusCode = 404;
  response.end("not found\n");
});

server.listen(4394, "127.0.0.1", () => {
  process.stdout.write("PERM004_SERVER_READY_4394\n");
});

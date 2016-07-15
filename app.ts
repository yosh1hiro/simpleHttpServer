/// <reference path="./node.d.ts" />;

import http = require('http');

/**
 * Main
 */
class Main {
  constructor() {
    let server = http.createServer((request:http.ServerRequest, response:http.ServerResponse) => this.requestHandler(request, response));
    server.listen("5000");
  }

  private requestHandler(request:http.ServerRequest, response:http.ServerResponse):void {
    response.end("Hello! Node.js with TypeScript!");
  }
}
var main: Main = new Main();
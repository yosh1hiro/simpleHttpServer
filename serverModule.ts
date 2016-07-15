/// <reference path='./node.d.ts' />;
import http = require('http');

export class ServerAPI {
  public initServer():void {
    let server: http.Server = http.createServer((request:http.ServerRequest,
      response:http.ServerResponse) => this.requestHandler(request, response));
      server.listen('5000');
  }

  private requestHandler(request:http.ServerRequest, response:http.ServerResponse):void {
    response.end('Call From ServerAPI Class');
  }
}
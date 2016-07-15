import serverModule = require('./serverModule');

class Main {
  constructor() {
    let serverAPI: serverModule.ServerAPI = new serverModule.ServerAPI();
    serverAPI.initServer();
  }
}
let main: Main = new Main();
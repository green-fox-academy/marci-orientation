import App from "./App";
import Router from "./Router";

const Server: App = new App([new Router()], 8080);

Server.listen();

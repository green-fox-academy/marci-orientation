import App from "./App";
import Router from "./Router";

const app: App = new App([new Router()], 8080);

app.listen();

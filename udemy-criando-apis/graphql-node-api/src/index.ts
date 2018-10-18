import * as http from "http";
import app from "./app";
import db from "./models";

import { normalizePort, onError, onListening } from "./utils/utils";

const server = http.createServer(app);
const port = normalizePort(process.env.port || 3000);

//sync do sequelize com mysql
db.sequelize.sync({force: true, logging: console.log})
  .then(() => {
    //nosso server só vai startar quando o sequelize terminar o sync
    server.listen(port);
    server.on("error", onError(server));
    server.on("listening", onListening(server));
});

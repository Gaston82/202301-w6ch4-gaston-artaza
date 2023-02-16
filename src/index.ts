import "./environment.js";
import things from "./data/things.js";
import debug from "debug";
import express from "express";
import { getThings } from "./controllers/thingsControllers.js";
import thingsRouters from "./routers/thingsRouters.js";
const app = express();
const logger = debug("things:root");
const port = process.env.PORT ?? 4000;

app.use("/things", thingsRouters);

app.listen(port, () => {
  logger(`Example app listening on port ${port}`);
});

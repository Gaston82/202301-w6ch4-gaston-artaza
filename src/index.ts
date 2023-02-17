import "./environment.js";
import debug from "debug";
import express from "express";
import thingsRouters from "./routers/thingsRouters.js";
import serverStart from "./serverStart.js";
const app = express();
const logger = debug("things:root");

app.use("/things", thingsRouters);

serverStart();

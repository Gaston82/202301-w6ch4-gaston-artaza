import "./environment.js";
import debug from "debug";
import express from "express";
const app = express();
const logger = debug("things:root");
const port = 4000;

app.get("/", (req, res) => {
  logger("Hello");
});

app.listen(port, () => {
  logger(`Example app listening on port ${port}`);
});

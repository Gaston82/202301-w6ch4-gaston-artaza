import express from "express";
const app = express();
import debug from "debug";

const logger = debug("things:root");
const port = process.env.PORT ?? 4000;

const serverStart = () => {
  app.listen(port, () => {
    logger(`Example app listening on port ${port}`);
  });
};

export default serverStart;

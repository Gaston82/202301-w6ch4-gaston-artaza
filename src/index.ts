import "./environment.js";
import debug from "debug";
import express from "express";
const app = express();
const logger = debug("/things");

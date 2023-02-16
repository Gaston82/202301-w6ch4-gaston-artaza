import { Router } from "express";
import { getThings } from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
const thingsRouters = Router();

thingsRouters.get("/", getThings);

export default thingsRouters;

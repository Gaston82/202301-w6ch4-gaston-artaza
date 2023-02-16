import { Router } from "express";
import { getThingById, getThings } from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
const thingsRouters = Router();

thingsRouters.get("/", getThings);
thingsRouters.get("/:id", getThingById);

export default thingsRouters;

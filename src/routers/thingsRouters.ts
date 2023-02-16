import { Router } from "express";
import {
  deleteThingById,
  getThingById,
  getThings,
} from "../controllers/thingsControllers.js";

// eslint-disable-next-line new-cap
const thingsRouters = Router();

thingsRouters.get("/", getThings);
thingsRouters.get("/:id", getThingById);
thingsRouters.delete("/:id", deleteThingById);

export default thingsRouters;

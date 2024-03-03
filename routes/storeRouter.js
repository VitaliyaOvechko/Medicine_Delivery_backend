import express from "express";
import { getAllStores, getOneStore } from "../controllers/stores.js";

const storesRouter = express.Router();

storesRouter.get("/", getAllStores);

storesRouter.get("/:id", getOneStore);

export default storesRouter;

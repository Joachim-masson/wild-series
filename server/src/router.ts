import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import categoryAction from "./modules/category/categoryAction";
import itemActions from "./modules/item/itemActions";
import programActions from "./modules/program/programActions";
import sayActions from "./modules/say/sayActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */
// Declaration of a "Welcome" route

router.get("/", sayActions.welcome);
/* ************************************************************************* */

router.get("/api/programs", programActions.browse);
router.get("/api/programs/:id", programActions.read);

router.get("/api/categories", categoryAction.listCategories);
router.get("/api/categories/:id", categoryAction.category);

export default router;

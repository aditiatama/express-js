import express from "express";
import UsersController from "../controllers/UsersController";
const router = express.Router();

router.route("/").post(UsersController.create).put(UsersController.getAll);

router
  .route("/:userName")
  .get(UsersController.getByName)
  .delete(UsersController.update)
  .get(UsersController.delete);

export default router;

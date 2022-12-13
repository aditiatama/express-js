import express from "express";
import UsersController from "../controllers/UsersController";
const router = express.Router();

router.route("/").post(UsersController.create).get(UsersController.getAll);

router
  .route("/:userName")
  .get(UsersController.getByName)
  .put(UsersController.update)
  .delete(UsersController.delete);

export default router;

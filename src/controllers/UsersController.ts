import { Request, Response } from "express";
import httpStatus from "http-status";

class UsersController {
  static async getAll(req: Request, res: Response) {
    res.status(httpStatus.NO_CONTENT).json({ message: "User list" });
  }

  static async getByName(req: Request, res: Response) {
    const { userName } = req.params;
    if (userName !== "softwareseni") {
      res.status(httpStatus.OK).json({ message: "User not found" });
    }
    res.status(httpStatus.OK).json({ message: `User ${req.params.userName}` });
  }

  static async create(req: Request, res: Response) {
    res
      .status(httpStatus.CREATED)
      .json({ message: "User created", data: req.body });
  }

  static async update(req: Request, res: Response) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: `User updated ${req.params.userName}`, data: req.body });
  }

  static async delete(req: Request, res: Response) {
    res
      .status(httpStatus.CREATED)
      .json({ message: `User deleted ${req.params.userName}` });
  }
}

export default UsersController;
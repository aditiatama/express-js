import { Request, Response } from "express";
import httpStatus from "http-status";

class UsersController {
  // curl -X GET http://localhost:3000/v1/users
  static async getAll(req: Request, res: Response) {
    res.status(httpStatus.OK).json({ message: "User list" });
  }

  // curl -X GET http://localhost:3000/v1/users/arif
  // curl -X GET http://localhost:3000/v1/users/softwareseni
  static async getByName(req: Request, res: Response) {
    const { userName } = req.params;
    if (userName !== "softwareseni") {
      return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
    }
    res.status(httpStatus.OK).json({ message: `User ${req.params.userName}` });
  }

  // curl -X POST http://localhost:3000/v1/users
  static async create(req: Request, res: Response) {
    res
      .status(httpStatus.CREATED)
      .json({ message: "User created", data: req.body });
  }

  // curl -X PUT http://localhost:3000/v1/users/sorfwareseni
  static async update(req: Request, res: Response) {
    res
      .status(httpStatus.OK)
      .json({ message: `User updated ${req.params.userName}`, data: req.body });
  }

  // curl -X DELETE http://localhost:3000/v1/users/sorfwareseni
  static async delete(req: Request, res: Response) {
    res
      .status(httpStatus.OK)
      .json({ message: `User deleted ${req.params.userName}` });
  }
}

export default UsersController;

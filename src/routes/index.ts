import express, { Request, Response } from 'express';
import userRoutes from './users.route';

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.send({ status: "Ok!" });
});

router.use('/users', userRoutes);


export default router;

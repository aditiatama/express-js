import express, { Application } from "express";
import routes from './routes'

const app: Application = express();
app.use(express.urlencoded({ extended: true }));

app.use('/v1', routes);

export default app;
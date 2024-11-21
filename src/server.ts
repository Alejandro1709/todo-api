import express, { Request, Response } from "express";
import todoRoutes from "./routes/todo.routes";
import cors from "cors";
import morgan from "morgan";
import { ENV, PORT } from "./config/secrets";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1/todos", todoRoutes);

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${PORT} in ${ENV} mode.`
  );
});

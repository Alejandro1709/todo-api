import express, { Request, Response } from "express";
import { ENV, PORT } from "./config/secrets";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log(
    `Server is up and running on http://localhost:${PORT} in ${ENV} mode.`
  );
});

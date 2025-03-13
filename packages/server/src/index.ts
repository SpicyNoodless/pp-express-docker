import { greet } from "@pp-express-docker/lib";
import { goodbye } from "@pp-express-docker/shared";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/greet", (req, res) => {
  res.send(greet("World"));
});

app.get("/goodbye", (req, res) => {
  res.send(goodbye("World"));
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

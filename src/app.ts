import express from "express";
import pino from "pino-http";
import productRoutes from "./routes/product.routes";
import authRoutes from "./routes/auth.routes";

const app = express();
app.use(express.json());
app.use(pino());

//Routes
app.use(productRoutes);
app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

export default app;

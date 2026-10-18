import express, { urlencoded } from "express";
import cookieparser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
  path: "../.env",
});
const app = express();

app.use(cookieparser());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  }),
);
// app.use(urlencoded({
//     limit:'15kb'
// }))
app.use(express.urlencoded({ extended: true, limit: "15kb" }));
app.use(
  express.json({
    limit: "15kb",
  }),
);

// // !Desire Routes
import { router as desireRouter } from "./routes/desire.route.js";
app.use("/api/v1/desire", desireRouter);

export default app;

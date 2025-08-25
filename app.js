// Disini module
import express from "express";
import dotenv from "dotenv";
import expressEjsLayouts from "express-ejs-layouts";

// Konfigurasi env  dan express
dotenv.config();
const app = express();
// PORT ngambil dari environtment variabel
const PORT = process.env.PORT || 8080;

// VIEW ENGINE
app.set("view engine", "ejs");
app.use(expressEjsLayouts);
app.set("layout", "layout");

// Middlewere
app.use(express.urlencoded({ extended: true }));

// Import router
import getRouter from "./routes/index.js";
import postRouter from "./routes/post.js";

app.use("/", getRouter);
app.use("/", postRouter);

app.listen(PORT, () => {
  console.log(`Run on http://localhost:${PORT}`);
});

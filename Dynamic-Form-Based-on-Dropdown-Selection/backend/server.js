import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import route from "./route/EmpRoute.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());



app.use("/api", route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server connected successfully: http://localhost:${PORT}`);
});

// http://localhost:5000/api
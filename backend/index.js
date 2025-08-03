import express from 'express';
import dotenv from 'dotenv';
import connectDB from './Databases/Config.js';
import authRoutes from "./Routers/AuthRoutes.js";
import cors from 'cors';
import protectedRoute from "./Routers/ProtectedRoute.js";

dotenv.config();
const app = express();

app.use(cors());             
app.use(express.json());     

const PORT = process.env.PORT;

app.use("/api/auth", authRoutes); 
app.use("/api", protectedRoute); 

app.get("/", (req, res) => {
    res.send("🎓 Placement backend is running");
});

connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import UserRoute from './routes/UserRoute.js';


dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.use('/user', UserRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// http://localhost:5000/user
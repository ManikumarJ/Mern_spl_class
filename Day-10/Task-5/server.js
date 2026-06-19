import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import studRoute from './routes/StudentRoute.js';


dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000

app.use(cors());
app.use(express.json());

app.use('/stud', studRoute);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// http://localhost:5000/stud
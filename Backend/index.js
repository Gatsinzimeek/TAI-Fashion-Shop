import express from 'express';
import dotenv from 'dotenv';
import router from './Routes/UserRoutes.js'
import { notFound, errorHandler } from './Middleware/ErrorMiddleWare.js';
import { connectDB } from './config/db.js';
dotenv.config();

// process.env.PORT || use it later 
connectDB();
const port =  process.env.PORT || 8001;
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/user', router)
app.get('/', (req,res) => res.send('server is ready'));
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));

import express from 'express';
import dotenv from 'dotenv';
import router from './Routes/UserRoutes.js'
import { notFound, errorHandler } from './Middleware/ErrorMiddleWare.js';

dotenv.config();

// process.env.PORT || use it later 

const port =  8000;
const app = express();

app.use('/api/user', router)
app.get('/', (req,res) => res.send('server is ready'));
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));

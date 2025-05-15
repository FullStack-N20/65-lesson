import express from 'express'
import dotenv from 'dotenv'
import {ConnectDB} from './db/connectDB.js'
import UserRouter from './routes/user.routes.js'

dotenv.config()

const app = express();
const PORT = Number(process.env.PORT);

app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.use('/api/user', UserRouter);

ConnectDB();


app.listen(PORT, () => {
    console.log(`Server starting on port: 5005`)
});
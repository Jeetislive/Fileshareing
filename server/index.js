import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import DBConnection from './database/db.js';

const app = express();

app.use(cors());
app.use('/', router);
app.get("/",(req,res)=> {
    res.end("Hello World");
});
const PORT = process.env.PORT || 8000;

DBConnection();

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
})
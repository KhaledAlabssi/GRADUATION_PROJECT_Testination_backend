const express = require('express');
const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

const teacherRouter = require('./routes/teacher')
app.use('/teacher', teacherRouter);
app.get('/', (req, res) => {
    res.send("Hi")
})

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on 3000 or process.env.PORT ")
})
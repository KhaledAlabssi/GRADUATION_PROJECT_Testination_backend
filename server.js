const express = require('express');
const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

const teacherRouter = require('./routes/teacher')
app.use('/teacher', teacherRouter);

const loginRouter = require('./routes/login')
app.use('/login', loginRouter);

app.get('/', (req, res) => {
    res.send("Hi")
})

app.listen(process.env.PORT || 4000,()=>{
    console.log("Server is running on 3000 or process.env.PORT ")
})
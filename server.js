const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const nodemailer = require('nodemailer')


const app = express();

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.json())



// const teacherRouter = require('./routes/teacher')
// app.use('/teacher', teacherRouter);

const loginRouter = require('./routes/login')
app.use('/login', loginRouter);

const mainRouter = require('./routes/home')
app.use('/main', mainRouter);

const groupsRouter = require('./routes/groups')
app.use('/groups', groupsRouter)

const testsRouter = require('./routes/tests')
app.use('/tests', testsRouter)

const questionRouter = require('./routes/questions')
app.use('/questions', questionRouter)

const studentRouter = require('./routes/students')
app.use('/students', studentRouter)

const assignmentRouter = require('./routes/assignments')
app.use('/assignments', assignmentRouter)

const testRouter = require('./routes/test')
app.use('/test', testRouter)

const resultRouter = require('./routes/results')
app.use('/results', resultRouter)

const answerRouter = require('./routes/answers')
app.use('/answers', answerRouter)

const emailRouter = require('./routes/email')
app.use('/email', emailRouter)


app.listen(process.env.PORT || 4000,()=>{
    console.log("Server is running on 4000 or process.env.PORT ")
})
const pool = require('../utilities.js');

function allQuestions(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query('select * from questions', (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function getQuestion(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query('select * from questions where body =?',`${req.params.body}`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function createQuestion(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log(req);
        connection.query(`INSERT INTO questions (id, body, teacher_id, score) VALUES (NULL, '${req.body.body}', 1, '${req.body.score}');`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function questionToTest(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log(req);
        connection.query(`INSERT INTO test_has_questions (test_id, question_id) VALUES ('${req.body.test_id}', '${req.body.question_id}');`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function currentQuestion(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log(req);
        connection.query(`select max(id) as id from questions;`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function addAnswer(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log(req);
        connection.query(`insert into answers (correct, option1, option2, option3, question_id, score) values ('${req.body.correct}', '${req.body.option1}', '${req.body.option2}', '${req.body.option3}', '${req.body.question_id}', '${req.body.score}');`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

module.exports = {
    allQuestions,
    getQuestion,
    createQuestion,
    questionToTest,
    currentQuestion,
    addAnswer
}
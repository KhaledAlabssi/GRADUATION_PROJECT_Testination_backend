const pool = require('../utilities.js');

function questionsById(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log('you called testById')
        connection.query(`select * from questions join test_has_questions on test_has_questions.question_id = questions.id where test_has_questions.test_id = ?`, `${req.params.id}`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function answersById(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log('you called testById')
        connection.query(`select * from answers join test_has_questions on answers.question_id = test_has_questions.question_id WHERE test_has_questions.test_id = ?`, `${req.params.id}`, (err, rows) => {
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
    questionsById,
    answersById
}
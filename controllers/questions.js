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
        connection.query(`INSERT INTO questions (id, body, user_id, score) VALUES (NULL, '${req.body.body}', 1, 100);`, (err, rows) => {
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
    createQuestion
}
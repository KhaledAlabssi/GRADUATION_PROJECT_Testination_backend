const pool = require('../utilities.js');

function alltests(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query('select * from tests', (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function test(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query("SELECT questions.*, test_has_questions.* FROM questions LEFT JOIN test_has_questions ON test_has_questions.question_id = questions.id WHERE test_has_questions.test_id =?",`${req.params.id}`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function createTest(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log(req);
        connection.query(`INSERT INTO tests (id, name, teacher_id) VALUES (NULL, '${req.body.name}', 1);`, (err, rows) => {
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
    alltests,
    test,
    createTest
}
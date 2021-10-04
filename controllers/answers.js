const pool = require('../utilities.js');

function newAnswer(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log('new test submission called.....')
        connection.query(`INSERT INTO answers (test_id, student_id, score, result) VALUES ('${req.body.test_id}', '${req.body.student_id}', '${req.body.score}', '${req.body.result}');`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
        console.log('new test submission called.....')
    })
}

module.exports = {
    newAnswer

}
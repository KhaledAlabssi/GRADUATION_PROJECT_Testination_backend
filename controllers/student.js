const pool = require('../utilities.js');

function getStudent(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query(`select * from students where email = '${req.body.email}' and password = '${req.body.password}'`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function getStudentTest(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query(`SELECT * from groups JOIN group_has_students on group_has_students.group_id = groups.id where group_has_students.student_id = '${req.body.student_id}'`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function getTest(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query(`SELECT * from questions INNER JOIN test_has_questions on questions.id = test_has_questions.question_id INNER JOIN assignments on assignments.test_id = test_has_questions.test_id INNER join groups on groups.id = assignments.group_id where groups.id = '${req.body.group_id}'`, (err, rows) => {
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
    getStudent,
    getStudentTest,
    getTest
}
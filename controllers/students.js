const pool = require('../utilities.js');

function allstudents(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query('select * from students', (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

function getStudent(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query('select * from users where name =?',`${req.params.name}`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}


function createStudent(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log(req);   
        connection.query(`INSERT INTO students (first_name, last_name, username, teacher_id, email, password) VALUES ('${req.body.first_name}', '${req.body.last_name}', '${req.body.username}', 1, '${req.body.email}', '${req.body.password}');`, (err, rows) => {
            connection.release() 
            // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
        
    })
}

function currentStudent(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
           
        connection.query(`select max(id) from students;`, (err, rows) => {
            connection.release() 
            // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
        
    })
}



module.exports = {
    allstudents,
    getStudent,
    createStudent,
    currentStudent
}
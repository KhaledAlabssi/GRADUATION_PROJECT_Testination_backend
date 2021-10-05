const pool = require('../utilities.js');

function allResults(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log('Connecting from result controller...')
        console.log(req);   
        connection.query(`SELECT answers.*, tests.name, students.first_name from answers JOIN tests on answers.test_id = tests.id join students on answers.student_id = students.id ORDER BY answers.id DESC;`, (err, rows) => {
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
    allResults


    
}
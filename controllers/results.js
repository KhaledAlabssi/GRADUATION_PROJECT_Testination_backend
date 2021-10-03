const pool = require('../utilities.js');

function submit(req, res) {
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        console.log('Connecting from result controller...')
        console.log(req);   
        connection.query(`insert into results (student_id, test_id, total, score) values (5, 6, 8, 7);`, (err, rows) => {
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
    submit


    
}
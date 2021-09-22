const pool = require('../utilities.js');

function login(req, res) {
    console.log(req.body.name)
    pool.getConnection((err, connection) => {
        if(err) throw err
        console.log(`connection as id....... ${connection.threadId}`)
        connection.query('select * from users where name =?',`${req.body.name}`, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.json(rows)
            } else {
                console.log(err)
            }
        })
    })
}

module.exports = login
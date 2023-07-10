const db = require('../config/db')

exports.listUsersModels = () => {
    db.query('SELECT * FROM users', (err, res, fields) => {
        if(err) throw new Error(err)
        return results
    })
}
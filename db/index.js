const mysql= require('mysql');

const pool = mysql.createPool({
    connectionLimit: 15,
    host: 'mymysql.senecacollege.ca',
    user: 'prj566_201a01',
    password: 'ejTQ@3652',
    port: '3306',
    database: 'prj566_201a01'
});

let database={};
database.all =()=>{
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM User`, (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

database.one = (id)=>{
    return new Promise((resolve, reject)=>{
        pool.query(`SELECT * FROM User where id = ?`, [id], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
}

module.exports = database; 
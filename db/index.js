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
database.addUser = (username, password, email)=>{
    return new Promise((resolve, reject)=>{  add: 'insert into user( username, password) values ( ?, ?)',
        pool.query(`INSERT INTO users(username, password, email) VALUES ( ?, ?, ?)`, [username, password, email], (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
}


module.exports = database; 
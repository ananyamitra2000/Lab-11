
const mysql= require('mysql2');

var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'0767',
        database:'servicesdbt'
    });

    connection.connect((err) =>
    {

        if(!err)
        console.log("db connected...")
        else
        console.log('error');
    }
    );
    
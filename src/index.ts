const express = require('express');
const app = express();
const mysqlInstance = require('mysql');
const mysqlConn = require('./mysql_config');

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => { console.log(`express server is listening on port ${PORT}`) });

app.get('/', (req: any, res: any) => {
    res.redirect('/get-all');
});

app.get('/get-all', (req: any, res: any) => {
    let query = 'SELECT * from todos';
    mysqlConn.query(query, (error: string, result: any, fields: any) => {
        if (error) throw new Error(error);
        res.send(result); // array; 1 object = 1 table row
    })
});

app.get('/view', (req: any, res: any) => {
    let id: number = req.query.id;
    let query = `SELECT text from todos WHERE id=${id}`;
    mysqlConn.query(query, (error: string, result: any, fields: any) => {
        if (error) throw new Error(error);
        res.send(result[0].text); // single entry with single object in single array
    })
})

app.post('/create', (req: any, res: any) => {
    let currentDate = new Date();
    let currentDateFormatted: string = currentDate.toISOString().slice(0, 10);
    let query = `INSERT INTO todos(name, phone, email, text, date, done) VALUES 
        (   
            ${mysqlInstance.escape(req.query.name)},
            ${mysqlInstance.escape(req.query.phone)},
            ${mysqlInstance.escape(req.query.email)},
            ${mysqlInstance.escape(req.query.text)},
            ${mysqlInstance.escape(currentDateFormatted)},
            0
        )`; // task is not done by default

    mysqlConn.query(query, (error: string, result: any, fields: any) => {
        if (error) throw new Error(error);
        res.end();
    });
    
});

app.post('/delete', (req: any, res: any) => {
    let id: number = req.query.id;
    let query = `DELETE FROM todos WHERE id = ${id}`;
    mysqlConn.query(query, (error: string, result: any, fields: any) => {
        if (error) throw new Error(error);
        res.end();
    });
});

app.post('/update', (req: any, res: any) => {
    let id: number = req.query.id;
    let newTask: string = mysqlInstance.escape(req.query.newTask);
    let query = `UPDATE todos SET text=${newTask} WHERE id=${id}`;
    mysqlConn.query(query, (error: string, result: any, fields: any) => {
        if (error) throw new Error(error);
        res.end();
    });
});

app.post('/updateTaskStatus', (req: any, res: any) => {
    let id: number = req.query.id;
    let newStatus: number = req.query.status;
    if (newStatus !== 0) newStatus = 0;
    if (newStatus !== 1) newStatus = 0;
    let query = `UPDATE todos SET done=${newStatus} WHERE id=${id}`;
    mysqlConn.query(query, (error: string, result: any, fields: any) => {
        if (error) throw new Error(error);
        res.end();
    });
});
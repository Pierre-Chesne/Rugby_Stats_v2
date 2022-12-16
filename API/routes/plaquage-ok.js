const express = require("express");
const index = express.Router();
const client = require('../Config/db')

// get plaquage
index.get('/plaquage-ok/get', (req, res) => {
    client.query(`SELECT * FROM plaquage_ok`, (err, result) => {
        if (!err) {
            res.send(result.rows);
        }
    });
    client.end;
})

// add plaquage
index.post('/plaquage-ok/add', (req, res) => {
    let insertQuery = `UPDATE plaquage_ok SET sum_plaquage_ok=sum_plaquage_ok+1 WHERE Id = 1`
    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('add plaquage ok !')
        }
        else { console.log(err.message) }
    })
    client.end;
})

// reset plaquage
index.post('/plaquage-ok/reset', (req, res) => {
    let insertQuery = `UPDATE plaquage_ok SET sum_plaquage_ok = 0 where id = 1`
    client.query(insertQuery, (err, result) => {
        if (!err) {
            res.send('reset plaquage ok !')
        }
        else { console.log(err.message) }
    })
    client.end;
})

module.exports = index;
const express = require("express");
const app = express();
const cors = require('cors');
const indexRouter = require("./routes/index");
const pg = require("pg");


const client = new pg.Client({
    user: 'admin',
    host: '127.0.0.1',
    database: 'test',
    password: passwd,
    port: 12345
});
client.connect()



app.use("/", indexRouter);
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('app listening on port 3000!');
});
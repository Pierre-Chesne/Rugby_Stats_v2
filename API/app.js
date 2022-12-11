const express = require("express");
const app = express();
const cors = require('cors');
const indexRouter = require("./routes/index");
const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
  
  client.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err.stack);
    } else {
      console.log('Connected to the database.');
    }
  });

app.use("/", indexRouter);
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('app listening on port 3000!');
});
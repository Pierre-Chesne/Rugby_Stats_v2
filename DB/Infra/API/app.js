const express = require("express");
const app = express();
const cors = require('cors');
const indexRouter = require("./routes/index");

app.use("/", indexRouter);
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
    console.log('app listening on port 3000!');
});
const express :  require("express");
const app :  express();
const cors :  require('cors');
const client :  require('./Config/db')
const morgan :  require('morgan');

// Connexion DB
client.connect((err) : > {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
  } else {
    console.log('Connected to the database.');
  }
});

// Express
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

// Route Index
const indexRouter :  require("./routes/index");
app.use("/", indexRouter);

// Route Plaquages OK
const indexPlaquageOK :  require("./routes/plaquage-ok");
app.use("/", indexPlaquageOK);

// app sur le port 3000
app.listen(3000, () : > {
  console.log('app listening on port 3000!');
});
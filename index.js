const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
let busboy = require('connect-busboy');
require("./db");
var path = require('path');
const port = process.env.PORT || 5000;

const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.use(express.json());
app.use(bodyParser.json());
app.use(busboy());


//Rutas
app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/categorias', require('./routes/categoria'));
app.use('/api/sesiones', require('./routes/sesiones'));
app.use('/api/problemas', require('./routes/problemaCatalogo'));
app.use('/api/asignaciones', require('./routes/problemaAsignado'));
app.use('/api/metodos', require('./routes/metodoResolucion'));
app.use('/api/acciones', require('./routes/dashboard'));
app.use('/api/ataques', require('./routes/ataque'));
app.use('/api/ayudas', require('./routes/ayuda'));
app.use('/api/busquedas', require('./routes/busqueda'));



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



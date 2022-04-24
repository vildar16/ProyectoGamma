const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require("./db");

const port = process.env.PORT || 5000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});



app.use(express.json());
app.use(bodyParser.json());


//Rutas
app.use('/api/usuarios', require('./routes/usuario'));
app.use('/api/categorias', require('./routes/categoria'));
app.use('/api/sesiones', require('./routes/sesiones'));
app.use('/api/problemas', require('./routes/problemaCatalogo'));
app.use('/api/instancias', require('./routes/problemaInstancia'));
app.use('/api/metodos', require('./routes/metodoResolucion'));




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



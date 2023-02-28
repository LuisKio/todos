const express = require('express');
const db = require('./utils/database');
const todoRoutes = require('./routes/todo.routes');
const Todo = require('./models/todos.model');

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log('CONEXION A LA DB');
    })
    .catch((err) => {
        console.log(`Ocurrio un errro ${err}`);
    })

db.sync()
    .then(() => {
        console.log('DB sincronizada');
    })
    .catch((err) => {
        console.log('ERROR');
    });

const app = express();
app.use(express.json());
app.use(todoRoutes);

app.listen(PORT, () => {
    console.log(`CONECTADO AL PUERTO ${PORT}`);
});




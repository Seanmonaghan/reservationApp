const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/res', (req, res) => res.sendFile(path.join(__dirname, 'res.html')));

app.get('/api/clients', (req, res) => res.json(clients))

app.listen(PORT, () => console.log(`App Listening on PORT ${PORT}`));

let reservations = [];
let waitingList = [];
const newCustomer = [];



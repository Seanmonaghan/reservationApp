const express = require('express');
const path = require('path')

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/res', (req, res) => res.sendFile(path.join(__dirname, 'res.html')));

<<<<<<< HEAD
app.listen(PORT, () => console.log(`App Listening on PORT ${PORT}`));
=======
app.get('/api/clients', (req, res) => res.json(clients))

app.listen(PORT, () => console.log(`App Listening on PORT ${PORT}`));

let clients = [];
let waitingList = [];
const newCustomer = [];

app.get('/api/clients', (req, res) => res.json(clients))

app.get('api/clients/:client', (req, res) => {
    const chosen = req.params.character

    console.log(chosen);

    for (let i = 0; i < clients.length; i++) {
        if (chosen === clients[i].routeName) {
            return res.json(clients[i]);
        }
    }

    return res.json(false);
})

app.post('/api/clients', (req, res) => {
    const newClient = req.body;

    newClient.routeName = newClient.name.replace(/\s+/g, '').toLowerCase();
    console.log(newClient)

    clients.push(newClient);
    res.json(newClient);
});
>>>>>>> c52dfc0c4c023dda431530b5230997196d075e93

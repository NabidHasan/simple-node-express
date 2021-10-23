const express = require('express');
var cors = require('cors')

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json())


const users = [
    { id: 0, name: "Nabid", email: "nabid12@gmail.com", phone: "01724252672" },
    { id: 1, name: "Jabid", email: "jabid12@gmail.com", phone: "01524252672" },
    { id: 2, name: "abid", email: "abid12@gmail.com", phone: "01824252672" },
    { id: 3, name: "maHid", email: "mahid12@gmail.com", phone: "01724252672" },
    { id: 4, name: "aSIF", email: "asif12@gmail.com", phone: "01724252672" },
]
app.get('/users', (req, res) => {
    const search = (req.query.search)
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));

        res.send(searchResult)
    }
    else {
        res.send(users);

    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})
app.get('/', (req, res) => {
    res.send('Hlw nabid ha san ')
})

app.listen(port, () => {
    console.log('listening to port', port);
})
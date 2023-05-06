const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors');

app.use(cors());
app.use(express.json());

const users = [
    {id:1, name: 'sagor', email: 'sagor@gmail.com'},
    {id:2, name: 'faruk', email: 'faruk@gmail.com'},
    {id:3, name: 'soni', email: 'soni@gmail.com'},
]

app.get('/', (req,res)=>{
    res.send('users management seystem is running')
})

app.get('/users', (req,res)=>{
    res.send(users);
})

app.post('/users', (req,res)=>{
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port,()=>{
    console.log(`server is running on PORT:${port}`)
})
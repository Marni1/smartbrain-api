const express = require('express')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt-nodejs')
const cors = require('cors');
const { response } = require('express');
const register = require('./controlers/register');
const signin = require('./controlers/signin');
const profile = require ('./controlers/profile');
const image = require('./controlers/image');
const knex =require('knex')({
    client: 'pg',
    connection: {
      host : 'postgresql-perpendicular-62053',
      port : 5432,
      user : 'postgres',
      password : 'admin',
      database : 'smart-brain'
    }
  });





const app = express();
app.use(bodyParser.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send('it is working');
})
app.post ('/signin', (req, res )=> {signin.handleSignin(req, res, knex, bcrypt)} )
app.post('/register', (req, res) => {register.handleRegister(req ,res, knex, bcrypt)})
app.get('/profile/:id', (req, res)=> {profile.handleProfile(req, res, knex)} )
app.put('/image', (req,res) => {image.handleImage(req, res, knex)})
app.post('/imageurl', (req,res) => {image.handleApiCall(req, res)})


app.listen(process.env.PORT || 3000, ()=> {
    console.log(`app is running on port ${process.env.PORT}`);
})






// ---> res = this is working
// /signin ---> POST = succes/fail
// register --> POST = user
// /profile/:userId --> GET = user
// /image --> PUT --> user
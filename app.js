const express = require('express');
const formidable = require("formidable");
const path = require('path');
const url = require('url');
const port = 1000;
let users = {};

const templatePath = path.join(__dirname,'./templates');
const app = express();
app.listen(port,()=>{console.log(`🍚 пачынаем на парту ${port}`)})


app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('styles'));
app.set("views", templatePath);

// get
app.get('/',(req,res)=>{
    const title = 'Home';
    res.render("home");
})
app.get('/signup',(req,res)=>{
    const title = 'Sign up';
    res.render("signup");
})
app.get('/login',(req,res)=>{
    const title = 'Log In';
    res.render("login");
})


// post

app.post('/reg',(req,res)=>{
    let form = new formidable.IncomingForm();
    form.parse(req,(err, fields)=>{
        if(err){
            res.writeHead(400,{"Content-Type": "text/ejs; charset=utf-8"});
            res.send(err.message);
            return;
        }
        console.log(fields);
    })
})


// error . . . 
app.use((req, res) => {
    res.status(404).render('error');
  });



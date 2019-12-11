const express       = require('express');
var methodOverride  = require("method-override");
var bodyParser      = require("body-parser");
const app           = express();

app.use(methodOverride("_method"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(__dirname + "/public"));
app.get('/', (req,res) => {
    res.render('index')
});

app.get('/landing', (req,res) => {
    res.render('landing')
});


app.get('/events', (req,res) => {
    res.render('events')
});

app.get('/speakers', (req,res) => {
    res.render('speaker')
});

app.get('/panel-discussion', (req,res) => {
    res.render('panel')
});

app.get('/workshops', (req,res) => {
    res.render('workshop')
});

app.get('/contact', (req,res) => {
    res.render('contact')
});


app.listen('3000', () => {
    console.log('Server started at port 3000');
});
const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');


const app = express();

hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

app.set('view engine','hbs');
app.set('views', `${__dirname}/views`)

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hola/:nombre',(req,res, next) => {
    let color = req.query.color;
    let {nombre} = req.params;
    console.log(req.perico);
    next();
    res.render("home2",{nombre, color})
});

app.get('/hola/marc',(req,res) => {
    res.render("home",{nombre: "PEPE"})
});

app.post('/recibeform',(req,res) => {
    let {saludito} = req.body
    // console.log(req.body);
    res.render("home",{nombre: `Victor ${saludito}`, color: "green"})
    res.redirect("/hola/"+ saludito)
})











const port = 3000;
app.listen(port, () => console.log(`Connected to ${port}`) );
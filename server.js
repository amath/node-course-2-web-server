const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
const port = process.env.PORT || 3000;
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentDate',()=>{
    return new Date().getFullYear();
})
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
res.render('home.hbs',{name:'Nochiketa Bagchi',
personType:'old man',
pageTitle:'Home Page',
currentYear:'2017'
});
});
app.get('/bad',(req,res)=>{
res.send({errorMsg:'Bad Request'});
});
app.get('/about',(req,res)=>{
res.render('about.hbs',{
    pageTitle:'About Page',
    currentYear:'2017'
})
});
app.listen(port);
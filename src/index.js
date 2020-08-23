const express= require('express')
const bodyParser=require('body-parser');
const { urlencoded } = require('body-parser');
const path=require('path');
const { dirname } = require('path');
const payment=require('./routes/payment')
const session=require('express-session');
const flash=require('connect-flash');
const expressLayout=require('express-ejs-layouts')

const app=express();

const port=process.env.PORT||3000;


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(session({
    secret:'using flash for first time!',
	saveUninitialized: true,
	resave: true
}))
app.use(flash());

console.log(path.join(__dirname+'../public'))
app.use(express.static(path.join(__dirname,'../public')));
app.use(expressLayout);

app.set('layout extractStyles',true)
app.set('layout extractScript',true)

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    const [data]=req.flash('data')
    console.log(data)
    res.render('index',{title:"index",data});
})
app.get('/home',(req,res)=>{
    res.render('home',{title:"home"})
})
app.use('/payment',payment)

app.listen(port,()=>{
    console.log("your port is up and running at port:",port)
})

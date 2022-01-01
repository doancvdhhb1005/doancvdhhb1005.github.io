var express=require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var ejs=require('ejs');
var mongoose=require('mongoose');
var config=require('./config');
// var db=require('./api/models/usermodels');
var Controller=require('./api/Controllers/controller1')
const res = require('express/lib/response');
//Set express
var app=express();
//set port
var port=process.env.PORT || 8080;
//Set middleware
app.use('/assets',express.static(__dirname+'/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
//set Views
app.set('view engine','ejs');
//set routing
app.get('/',function(req,res){
    res.render('index');
})
Controller(app);//Chay API Resful
mongoose.connect(config.getConnectionString());
// Controller(app);
app.listen(port,function(){
    console.log('Server is listening in port ',port);
})
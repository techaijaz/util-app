const express = require('express');
const path = require('path');
const todo = require('./src/todo');
const bodyParser = require('body-parser');
const app = express();

//path for the express config
const staticPath = path.join(__dirname,'/public');
const viewsPath = path.join(__dirname,'/templets');
const partiaslPath = path.join(__dirname,'/templets/partials');

app.set('view engine','ejs');
app.set('views', viewsPath);


//setup public dir to serve
app.use(express.static(staticPath));
app.use(express.urlencoded({extended: true}));

app.get('',(req,res)=>{
	res.render('index',{data:todo.getTodoList()});
});

app.get('/about',(req,res)=>{
	res.render('about', {title:'About'});
});

app.get('/weather',(req,res)=>{
	res.render('weather', {title:'Weather'});
});

app.post('/saveTodo',(req,res)=>{
	todo.addTodo(req.body);
	res.status(200).end();
});

app.post('/updateTodo',(req,res)=>{
	todo.updateTodo(req.body);
	res.status(200).end();
});

app.get('*',(req,res)=>{
	res.render('404', {title:'404'});
});




app.listen(3000,function(){
	console.log('Server is running on port : 3000!');
});
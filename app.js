const express = require("express");
const app=express();
const PORT=2424;
app.use(express.static('public'));
app.use('/css',express.static(__dirname+'public/css'));

app.set('views','./src/views');
app.set('view engine','ejs');

const newsRouter=require('./src/routes/news');
app.use('/',newsRouter);


// listen on port 2424

app.listen(PORT,()=>console.log(`listening on port ${PORT}`));
const express=require('express');
const app=express();
const path=require('path');
const rootDir=require('./utils/root');

app.use(express.static(path.join(rootDir,'public')));

app.set('view engine','pug');
app.set('views','views');

app.use('/',(req,res,next)=>{
    res.render('main-layout');
});
app.listen(3000);
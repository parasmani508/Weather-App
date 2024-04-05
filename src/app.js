const express=require('express');
const path=require('path');
const app=express();
const hbs=require('hbs');
const port=3000;

//Public static path
const staicpath=path.join(__dirname,"../public");
const template_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");
app.set('view engine',"hbs");
app.set('views',template_path)
hbs.registerPartials(partial_path)

app.use(express.static(staicpath));


//Routing
app.get("/",(req,res)=>
{
 res.render("index");
})

app.get("/about",(req,res)=>
{
 res.render("about");
})

app.get("/weather",(req,res)=>
{
 res.render("weather");
})

app.get("*",(req,res)=>
{
 res.render("404",{
    errormsg:"oops error"
 });
})


app.listen(port,()=>
{
    console.log(`Listening ${port}`);
})
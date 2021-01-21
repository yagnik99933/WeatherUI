const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8005;

//public static path
const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));

app.get("",(req,res) =>{

    res.send("welcome to my world");

})

app.get("/about",(req,res) =>{

    res.send("welcome to my world about page");

})
app.get("/weather",(req,res) =>{

    res.send("welcome to my world weather page");

})

app.get("*",(req,res) =>{

    res.send("404 error oops");

})



app.listen(port , () => {

    console.log('Listening to the port t ${port}')

})
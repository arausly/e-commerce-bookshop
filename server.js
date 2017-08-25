"use-strict"
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5050;

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res,next)=>{
	res.sendFile(path.join(__dirname,'public','index.html'));
})

app.listen(port,(err)=>{
	if(err)	return console.log(err)
    console.log(`app is running on port ${port}`);
}) 
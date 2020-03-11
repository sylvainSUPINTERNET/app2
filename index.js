'use strict';


const express = require('express');
const app = express();


app.get('/', (req,res,next) => {
res.status(200).json({msg: "salut app 2"});
});

app.listen(4000, () => {
  console.log("App2 start on port : " + 4000);
});

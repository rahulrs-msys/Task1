const express = require("express");
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const app = express();

const Apiroute = require('./routes/route');


  app.use((req,res,next)=>{
    if (!req.headers['Request-ID']) {
        // Generate a new request ID using UUID v4
        const requestId = uuid.v4();
        // Add request ID to request headers
        req.headers['Request-ID'] = requestId;
        // console.log(requestId);
    }
    
    next();
        
  })

app.use(Apiroute);




app.listen(3000, () => {
    console.log('Server started on port 3000');
  });
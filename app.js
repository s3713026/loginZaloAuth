const express = require('express')
const app = express()
const { request } = require('https')

const fs = require('fs');



app.use(express.static('public'))

app.get('/loc', (request, response) => {
    console.log(request.params)
    var url_page = request.query;
    var string = JSON.stringify(url_page);
    var objectValue = JSON.parse(string);
    var get_authorization_code = objectValue['code'];
  
    console.log("Authorization Code: " + get_authorization_code);
  })


app.listen(process.env.PORT ||5000,()=>{
    console.log(`Running on port 5000`)
})
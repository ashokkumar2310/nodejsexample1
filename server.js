 const express= require('express')
 const Adminrouter=require('./controller/Admincontroller')
 const app=express()

 app.use('/Admin',Adminrouter)
 app.listen(8080)

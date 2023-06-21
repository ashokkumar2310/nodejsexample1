
const connection=require('./Dbconfig')
const mysql=require('mysql')
const pool=mysql.createPool(connection.values)

function getAllApplication(callback){
  pool.query('select * from Inventory',(e,results,fields)=>{
    if(e){
        console.error("error executing query:"+e.stack);
   return callback(e,null);
    }
    
   return callback(null,results);
})
}
function getAllUsers(callback){
   pool.query('select * from user',(e,results,fields)=>{
     if(e){
         console.error("error executing query:"+e.stack);
    return callback(e,null);
     }
     
    return callback(null,results);
 })

}
 function addApplication(body,callback){
   
   pool.query('INSERT INTO Inventory VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
   [body.Application_Name,body.Point_Of_Contact,body.It_Owner,body.SME,body.Business_Usage,body.Business_Owner,body.Production_Server,body.Test_Server,body.Dev_Server,body.DB_Production_Server,body.DB_Test_Server,body.DB_Dev_Server],
   (e,results,fields)=>{
     if(e){
         console.error("error executing query:"+e.stack);
    return callback(e,null);
     }
    return callback(null,results);
 })
}

function updateApplication(body,AppName,callback){
   
  pool.query('UPDATE Inventory SET Point_Of_Contact=?,It_Owner=?,SME=?, Business_Usage=?, Business_Owner=?, Production_Server=?,Test_Server=?,Dev_Server=?,DB_Production_Server=?,DB_Test_Server=?,DB_Dev_Server=? WHERE Application_Name=?',
  [body.Point_Of_Contact,body.It_Owner,body.SME,body.Business_Usage,body.Business_Owner,body.Production_Server,body.Test_Server,body.Dev_Server,body.DB_Production_Server,body.DB_Test_Server,body.DB_Dev_Server,AppName],
  (e,results,fields)=>{
    if(e){
        console.error("error executing query:"+e.stack);
   return callback(e,null);
    }
   return callback(null,results);
})
}
function deleteApplication(appname,callback){
  pool.query('DELETE FROM Inventory WHERE Application_Name= ?',[appname],(e,results,fields)=>{
    if(e){
        console.error("error executing query:"+e.stack);
   return callback(e,null);
    }
    
   return callback(null,results);
})
}


module.exports={getAllApplication,getAllUsers,addApplication,updateApplication,deleteApplication};
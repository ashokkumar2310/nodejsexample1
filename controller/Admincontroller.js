const express = require('express')
const app=express()
const router = express.Router();
const Admindao = require('../Dao/AdminDao');
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())
router.get('/allApplication', (req, res) => {

    Admindao.getAllApplication((e, results) => {
        if (e) {
            console.error("error while viewing application")
        }
        return res.json(results)
    })

})
router.put('/allApplication/:application_Name',(req,res)=>{
    res.setHeader('content-type',"application/json")
const bodyvalue=req.body
    Admindao.updateApplication(bodyvalue,req.params.application_Name,(e,results)=>{
        if(e){
            console.error("error while printing data")
        }
        return res.json(bodyvalue)
    })
})
router.get('/allApplication/:application_Name',(req,res)=>{
    Admindao.getAllApplication((e,results)=>{
        if(e){
            console.error("error while printing data")
        }
        return res.json(results.filter((r)=>r.Application_Name===req.params.application_Name))
    })
})
router.delete('/allApplication/:application_Name',(req,res)=>{
    Admindao.deleteApplication(req.params.application_Name,(e,results)=>{
        if(e){
            console.error("error while printing data")
        }
        return res.json([{message:req.params.application_Name+" Application got deleted successfully"}])
    })
})
router.get('/users', (req, res) => {

    Admindao.getAllUsers((e, results) => {
        if (e) {
            console.error("error while viewing application")
        }
        return res.json(results)
    })

})
router.get('/users/:nid', (req, res) => {

    Admindao.getAllUsers((e, results) => {
        if (e) {
            console.error("error while viewing application")
        }
        return res.json(results.filter((r)=>r.user_Nid===req.params.nid))
    })

})
router.post('/addapplication', (req, res) => {
    res.setHeader('content-type',"application/json")
const bodyvalue=req.body
    Admindao.addApplication(bodyvalue,(e, results) => {
        if (e) {
            console.error("error while adding application")
        }
        
        return res.json(bodyvalue)
    })

})

module.exports = router;
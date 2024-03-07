const express = require('express')
const router = express.Router()

router.post('/login',(req,res)=>{
    res.send('login')
})
router.post('/regis',(req,res)=>{
    res.send('regis')
})


module.exports = router;
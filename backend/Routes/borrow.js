const express = require('express')
const router = express.Router()

router.get('/borrow',(req,res)=>{
    res.send('aaaaaa')
}) //list
router.get('/borrow/:id') //read
router.post('/borrow') //create
router.put('/borrow/:id') //update
router.delete('/borrow/:id') //delete


module.exports = router;
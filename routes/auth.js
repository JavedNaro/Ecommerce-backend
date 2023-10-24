const router=require('express').Router();
const user = require('../models/user');

const bcrypt = require("bcrypt")

//register API
router.post('/reqgisterr', async (req,res)=>{
    try{

        const salt = await bcrypt.genSalt(10);
        const hashpass =await bcrypt.hash(req.body.password, salt)
        const newUser= new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })
    }
})
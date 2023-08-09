const express = require('express')
const UserModel = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt=require('jsonwebtoken')
const userrouter = express.Router()

userrouter.post("/register", async (req, res) => {
    try {
        const { name, email, password, preferredcity } = req.body
        const isuserpresent = await UserModel.findOne({ email })
        if (isuserpresent) {
            return res.send({ msg: "User already present login" })
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            const newuser = new UserModel({ name, email, password: hash, preferredcity })
            await newuser.save()
        })
        res.send({ msg: "Registration Succesful" })

    } catch (error) {
        res.status(401).send({ msg: error.message })
    }
})

userrouter.post("/login",async (req,res)=>{
    try {
        const {email,password}=req.body
        const user=await UserModel.findOne({email})
        if(!user){
            return res.send({msg:"No user found"})
        }
        bcrypt.compare(password,user.password,(err,result)=>{
            if(result){
                const token=jwt.sign({userID:user._id,preferredcity:user.preferredcity},process.env.secretkey,{expiresIn:"1h"})
                res.send({msg:"login succesful",token,user})
            }else{
                return res.send({msg:"invalid credintials"})
            }
        })
    } catch (error) {
        res.status(401).send({msg:error.message})
    }
})
module.exports = userrouter
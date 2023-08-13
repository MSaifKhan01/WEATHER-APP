const jwt=require('jsonwebtoken')
require('dotenv').config()




const auth=async (req,res,next)=>{
    const token=req.headers.authorization || null
    // const token = req.cookies.authToken;
    // let token = req.cookies.token;
    console.log("from aouth,",token)
    if(token){
        jwt.verify(token,process.env.secretkey,(err,decoded)=>{
            if(decoded){
                console.log(decoded)
                req.body.userID=decoded.userID
                req.preferredcity=decoded.preferredcity
                req.userID=decoded.userID
                next()
            }else{
                return res.send({msg:"Login again"})
            }
        })
    }else{
        return res.send({msg:"Login first"})
    }

    
}

module.exports=auth
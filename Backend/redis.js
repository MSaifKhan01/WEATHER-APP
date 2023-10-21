const Redis=require('ioredis')

const configuartion={
    port:19043,
    host:"redis-19043.c301.ap-south-1-1.ec2.cloud.redislabs.com",
    
    username:"default",
    password:process.env.redis_Key
}
const redis=new Redis(configuartion)

module.exports=redis
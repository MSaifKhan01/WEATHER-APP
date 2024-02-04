const Redis=require('ioredis')

const configuartion={
    port:16520,
    host:"redis-16520.c305.ap-south-1-1.ec2.cloud.redislabs.com",
    
    username:"default",
    password:process.env.redis_Key
}
const redis=new Redis(configuartion)

module.exports=redis
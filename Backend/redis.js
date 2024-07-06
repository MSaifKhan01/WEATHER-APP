const Redis=require('ioredis')

const configuartion={
    // port:16520,
    port:   15072,
    // host:"redis-16520.c305.ap-south-1-1.ec2.cloud.redislabs.com",
    host:"redis-15072.c84.us-east-1-2.ec2.redns.redis-cloud.com",
   
    username:"default",
    password:process.env.redis_Key
}
const redis=new Redis(configuartion)

module.exports=redis
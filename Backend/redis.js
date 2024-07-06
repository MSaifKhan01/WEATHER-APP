// const Redis=require('ioredis')

// const configuartion={
//     // port:16520,
//     port:   15072,
//     // host:"redis-16520.c305.ap-south-1-1.ec2.cloud.redislabs.com",
//     host:"redis-15072.c84.us-east-1-2.ec2.redns.redis-cloud.com",
   
//     username:"default",
//     password:process.env.redis_Key
// }


// import { createClient } from 'redis';
// const createClient=require("redis")

// const client = createClient({
//     password: 'urIt86b0hhkirlN0ZGhtkOSzV9eqN3W3',
//     socket: {
//         host: 'redis-15072.c84.us-east-1-2.ec2.redns.redis-cloud.com',
//         port: 15072
//     }
// });
// const redis=new Redis(configuartion)

// module.exports=redis


const Redis = require('ioredis');

// Configuration for ioredis
const configuration = {
    port: 15072,
    host: 'redis-15072.c84.us-east-1-2.ec2.redns.redis-cloud.com',
    username: 'default',
    password: process.env.redis_Key 
};

// Create a new Redis client instance
const redis = new Redis(configuration);

// Event listener for connection
redis.on('connect', () => {
    console.log('Connected to Redis');
});

// Event listener for error
redis.on('error', (err) => {
    console.error('Redis connection error:', err);
});

module.exports = redis;

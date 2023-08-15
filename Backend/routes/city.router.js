const axios = require('axios')
const express = require('express')
const auth = require('../middleware/auth')
const redis = require('../redis')
const UsercitiesModel = require('../model/usercities.model')
const cityrouter = express.Router()

cityrouter.get("/", auth, async (req, res) => {
   
    const city = req.query.city || req.preferredcity
    const cachedata = await redis.get(city + req.userID)
   
    if (cachedata) {
        console.log("from redis")
        return res.send(cachedata)
    } else {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=206e137a5279484093b120132232904&q=${city}`)
        const weatherdata = response.data
        redis.set(city + req.userID, JSON.stringify(weatherdata))

        
        // Date and time in indian formate
        const currentTime = new Date();
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZone: 'Asia/Kolkata' // Indian time zone
        };

        const formattedTime = currentTime.toLocaleString('en-IN', options);



        await UsercitiesModel.findOneAndUpdate({ userID: req.userID }, {
            userID: req.userID,
            $push: { citiesvisited: { city: city, visitedAt: formattedTime } }
        }, { upsert: true, new: true, })
        console.log("form axios")
        res.send(weatherdata)
    }

})

cityrouter.get("/usercity", auth, async (req, res) => {
    const city = await UsercitiesModel.findOne({ userID: req.userID })
    console.log(city)
    res.send(city)
})


module.exports = cityrouter
// const axios = require('axios')
// const express = require('express')
// const auth = require('../middleware/auth')
// const redis = require('../redis')
// const UsercitiesModel = require('../model/usercities.model')
// const cityrouter = express.Router()


// cityrouter.get("/",  async (req, res) => {


    
   
//     const city = req.query.city || req.preferredcity
//     const cachedata = await redis.get(city + req.userID)
   
//     if (cachedata) {
//         console.log("from redis")
//         return res.send(cachedata)
//     } else {
//         console.log("----------------------------","--helllllllllllllllll090909009","------------------------")
//         const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=206e137a5279484093b120132232904&q=${city}`)

//         console.log("----------------------------",response,"------------------------")
//         const weatherdata = response.data
//         redis.set(city + req.userID, JSON.stringify(weatherdata))

        
//         // Date and time in indian formate
//         const currentTime = new Date();
//         const options = {
//             year: 'numeric',
//             month: 'numeric',
//             day: 'numeric',
//             hour: 'numeric',
//             minute: 'numeric',
//             second: 'numeric',
//             timeZone: 'Asia/Kolkata' // Indian time zone
//         };

//         const formattedTime = currentTime.toLocaleString('en-IN', options);



//         await UsercitiesModel.findOneAndUpdate({ userID: req.userID }, {
//             userID: req.userID,
//             $push: { citiesvisited: { city: city, visitedAt: formattedTime } }
//         }, { upsert: true, new: true, })
//         console.log("form axios")
//         res.send(weatherdata)
//     }

// })

// cityrouter.get("/usercity", auth, async (req, res) => {
//     const city = await UsercitiesModel.findOne({ userID: req.userID })
//     console.log(city)
//     res.send(city)
// })


// module.exports = cityrouter

const axios = require('axios');
const express = require('express');
const auth = require('../middleware/auth');
const redis = require('../redis');
const UsercitiesModel = require('../model/usercities.model');
const cityrouter = express.Router();

cityrouter.get("/",auth, async (req, res) => {
    const city = req.query.city || req.query.preferredcity;

    // Log the city parameter for debugging
    console.log("City parameter:", city);

    if (!city) {
        return res.status(400).send({ error: 'City not provided' });
    }

    try {
        const cachedata = await redis.get(city + req.userID);
        if (cachedata) {
            console.log("from redis");
            return res.send(JSON.parse(cachedata));
        } else {
            console.log("Fetching from API...");
            const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=206e137a5279484093b120132232904&q=${encodeURIComponent(city)}`);
            console.log("Axios Response:", response.data);
            const weatherdata = response.data;

            // Check if API response indicates an error
            if (weatherdata.error) {
                console.error("WeatherAPI Error:", weatherdata.error.message);
                return res.status(400).send({ error: weatherdata.error.message });
            }

            await redis.set(city + req.userID, JSON.stringify(weatherdata));

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

            await UsercitiesModel.findOneAndUpdate(
                { userID: req.userID },
                { $push: { citiesvisited: { city: city, visitedAt: formattedTime } } },
                { upsert: true, new: true }
            );

            console.log("Data fetched from API");
            res.send(weatherdata);
        }
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx
            console.error('Error Response Data:', error.response.data);
            console.error('Error Response Status:', error.response.status);
            console.error('Error Response Headers:', error.response.headers);
            res.status(error.response.status).send({ error: error.response.data.message });
        } else if (error.request) {
            // The request was made but no response was received
            console.error('Error Request:', error.request);
            res.status(500).send({ error: 'No response received from WeatherAPI' });
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error Message:', error.message);
            res.status(500).send({ error: 'Error setting up request to WeatherAPI' });
        }
    }
});

cityrouter.get("/usercity",auth,  async (req, res) => {
    try {
        const city = await UsercitiesModel.findOne({ userID: req.userID });
        console.log("User cities:", city);
        res.send(city);
    } catch (error) {
        console.error('Error fetching user cities:', error.message);
        res.status(500).send({ error: 'Error fetching user cities' });
    }
});

module.exports = cityrouter;

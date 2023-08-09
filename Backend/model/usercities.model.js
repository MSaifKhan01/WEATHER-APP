const mongoose=require('mongoose')

const usercityschema=mongoose.Schema({
   userID:String,
   citiesvisited:Array
})

const UsercitiesModel=mongoose.model("citie",usercityschema)

module.exports=UsercitiesModel
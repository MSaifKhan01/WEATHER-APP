const mongoose=require('mongoose')

const usercityschema=mongoose.Schema({
   userID:String,
   citiesvisited:Array
},{
   timestamps: true
})

const UsercitiesModel=mongoose.model("citie",usercityschema)

module.exports=UsercitiesModel
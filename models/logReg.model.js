const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const logRegSchema= new Schema({
 userName:{
  type:String,
  required:true
 },
 userPassword:{
  type:String,
  required:true
 }
},{
 timestamps:true,
 versionKey:false
})

module.exports = new mongoose.model('logreg', logRegSchema)
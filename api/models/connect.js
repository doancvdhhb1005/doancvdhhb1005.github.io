var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var todoSchema=new Schema({
    text:String,
    isDone:Boolean
},{collection:String,versionKey:false});
var Todos=mongoose.model('collection_todo',todoSchema,'collection_todo');
module.exports=Todos;
// var {MongoClient}=require('mongodb');
// var config=require('../../config');

// class Mongodb{
//     client=null;
//     uri=null;
//     collection=null;
//     constructor(){
//         this.uri=config.getConnectionString();
       
//         this.client=new MongoClient(this.uri,{useNewUrlParser: true, useUnifiedTopology: true });
   
//     }
//     setCollection=function(db,collection){
//             this.collection=this.client.db(db).collection(collection);
//     }
//     result1=null;
//     insert=function(json,type='single'){
//         if(type==='single'){
//             this.client.connect(err=>{
     
//             var insert=this.collection.insertOne(json);
//             insert.then(function(result){
//                 console.log(result);
//             });
//         })
//     }
//         else{
//             this.client.connect(err=>{
//                 this.collection.insertMany(json).then(function(result){
//                     return result.acknowledged;
//             });
//             })
//         }
        
//     }
//     // select=function(where=null){
//     //   if(!where){
//     //     this.client.connect(err=>{
//     //         this.collection.find({}).toArray().then(function(result){
//     //             return result;
//     //         })
//     //     });
//     //             }
//     //     this.client.connect(err=>{
//     //     this.collection.find(where).toArray().then(function(result){
//     //         return result;
//     //         })
//     //     });
     
//     // }
//     // delete=function(where){
//     //     this.client.connect(err=>{
//     //         this.collection.deleteMany(where).then(function(result){
//     //             return result.acknowledged;
//     //             })
//     //         });
       
//     // }
//     // update=function(json,where){
//     //     this.client.connect(err=>{
//     //         this.collection.updateOne(where,{$set:where}).then(function(result){
//     //             return result.acknowledged;
//     //         })
//     //         });
       
//     // }
// }
// module.exports=new Mongodb();
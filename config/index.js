
var configValues=require('./config.json');
module.exports={
    getConnectionString:function(){
        return  `mongodb+srv://${configValues.username}:${configValues.password}@cluster0.jjzz1.mongodb.net/db_public?retryWrites=true&w=majority`;
    }
}
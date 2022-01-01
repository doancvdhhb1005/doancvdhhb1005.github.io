var app=angular.module('app').service('myService',['$http',function($http){
    return{
        get:function(){
            return $http.get('/api/findall');
        },
        post:function(datacreate){
            return $http.post('/api/create',datacreate);
        },
        put:function(datacreate){
           
            return $http.put('/api/update',datacreate);
        },
        delete:function(_id){
            return $http.delete('/api/delete/'+_id);
        }
    }}]
  );

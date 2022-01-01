var app = angular.module("app", ["xeditable",'ngRoute']);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

app.controller('mainController', ['$scope','myService',function($scope,myService) {
  $scope.loading=true;
  myService.get().then(function(res){
    $scope.todos=res.data;
    $scope.loading=false;
  });
  
  $scope.addWork=function(){
    $scope.loading=true;
    var newWork={text:$scope.text,isDone:false};
  
    myService.post(newWork).then(function(res){
      $scope.todos=res.data;
      $scope.text='';
      $scope.loading=false;
    })
  }
  $scope.removeWork=function(todo){
    $scope.loading=true;
    myService.delete(todo._id).then(function(res){
      $scope.todos=res.data;
      $scope.loading=false;
    })
  }
  $scope.updateWork=function(todo){
    $scope.loading=true;
      myService.put(todo).then(function(res){
        $scope.todos=res.data;
        $scope.loading=false;
      })
  }}]

);

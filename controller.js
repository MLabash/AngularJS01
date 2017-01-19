    var myApp = angular.module('myApp', []);
    myApp.controller('myController', function() {
           var vm = this;
           vm.hobbies = [];
           vm.addInfo = true;
        
           vm.addHobby = function() {
               var newHobby = {"name" : vm.hobby, "favorite":false};
               vm.hobbies.push(newHobby);
               vm.hobby= "";
            }
           
           vm.delete = function(index) {
               vm.hobbies.splice(index, 1);
           }
          
           vm.save= function(){
             vm.addInfo = !vm.addInfo;
           }
    });


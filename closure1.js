const me = "Gilbert Gotora";
 function greetMe(){
     console.log("Hello ", me);
 }
//me = "Mr Gotora";
 greetMe();

 var addTo = function(passed){
     var add = function(inner){
         return passed + inner;
     }
     return add;
 }
 console.log(addTo(9));// at this point inner is
 //still undefined
 var myNum = new addTo(3);
 console.log(myNum(9));
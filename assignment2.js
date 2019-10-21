function o(){
  var x = 0;
  while (x = 99){
    x = x + 1;
    if(x % 4 == 0 & x % 10 ==){
     console.log("fourteen");
    }else if(x % 10 == 0){
     console.log("ten");
    }else if(x % 4 == 0){
     console.log("four");
    }else{
     console.;og(x);
     
    }
  
  }
}


 function giveayear(){
    var year = prompt("Give me a year and I will give you a century");
    var century = year/100 + 1;
    console.log (century)
   prompt("that year is the " +math.floor (century) + " century");
   
   
 }

 function triangle(){
  var x = prompt("Enter an angle belonging to a triangle(just the number)");
  var y = prompt("Enter the other angle of the same triangle(just the number)");
  alert(180 - x - y + " " + " degree is the third angle of the triangle");
  
}
// isTen is a function that receives 2 arguments (a and b).
// if the sum of a and b is 10 => return "isTen 10" Otherwise return "nope"

const isTen = (a,b)=>{ 

    if ((a+b) >= 10) {
           return("makes 10");
       }
       else{
           return("nope");
       }
   }

   console.log(isTen(1,1));
   
   console.log(isTen(5,5));



function pri() {
  alert("working");
}
function prt() {
  var p = parseFloat(document.getElementById("principal").value);
  var t=parseFloat(document.getElementById("time").value);
  
  if(t>=1 && t<2)
  {
   var r=3.0;
  }
  else if(t>=2 && t<3)
  {
   var r=3.5;
  }
   else if(t>=3 && t<5)
  {
   var r=4.5;
  }
   else if(t>=5 && t<10)
  {
   var r=5.5;
  }    
 

 si= ((p*r*t)/100);
document.write( "YOU WILL GET AN INTREST OF:"+si);
}


function getRate() {
  var outputspan = document.getElementById("outputspan");
var roi = document.getElementById("time").value;

  if (roi < 1) {
   try{
     throw "MINIMUM PERIOD OF INVESTMENT IS 1 year";
     }
    catch (err) {
     outputspan.innerHTML = "INVALID INPUT:" + err;

   }} 
  else if (roi>=1 && roi<2) {
    outputspan.innerHTML = " YOU GET 3.0% PER ANNUM";
  } else if (roi >=2 && roi < 3) {
    outputspan.innerHTML = " YOU GET 3.5% PER ANNUM";

  } else if (roi >= 3 && roi <= 5) {
    outputspan.innerHTML = " YOU GET 4.5% PER ANNUM";

  } else if (roi >= 5 && roi <= 10)  {
    outputspan.innerHTML = " YOU GET 5.5% PER ANNUM";

  }
  else {
    try{
    throw "MAXIMUM PERIOD OF INVESTMENT IS 10 YEARS";
    }
   catch (err) {
    outputspan.innerHTML = "INVALID INPUT:" + err;
}
  }

}


    
    var temp = parseFloat(document.getElementById("temp").value);

    var speed = parseFloat(document.getElementById("speed").value);
    var f = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed,0.16) + 0.4275 * temp * Math.pow(speed,0.16);
 
      if (temp <= 50 && speed >3) {
         f = f.toFixed(0);
      }  
else {
    f = "N/A";
}
    
    
    document.getElementById("windchill").innerHTML = f
   
   
    
    
      
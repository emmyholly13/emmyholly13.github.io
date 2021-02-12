function doInputOutput() {
    //get temperature from the first text field.
    let t = parseInt(document.getElementById("temp").value);
    //get wind speed from second text field.
    let s = parseInt(document.getElementById("speed").value);

    //call the winChill function.
    // Display the windChill for the user to see.
    document.getElementById("windchill").innerHTML = windChill(t, s);

   }

    function windchill(t, s) {
    //calculate the wind chill factor as a temperature in Fahrenheit.
    //where f is the wind chill factor in Fahrenheit, t is the air temperature in Fahrenheit, and s is the wind speed in miles per hour at five feet above the ground.
    
    var f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s,0.16) + 0.4275 * t * Math.pow(s,0.16);
      return  f;

       }
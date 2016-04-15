   { 
 
   var temperature = 53;
   var temperatureType = "F";

   console.log ("Temperature =", temperature);
   console.log ("Temperature Type =", temperatureType);

   var convertedTemperature;

   if (temperatureType === "F") { 
   		convertedTemperature = (temperature - 32) * 5/9; }
   else { 
   		convertedTemperature = temperature * 9/5 + 32; }
  
   console.log ("Converted Temperature is", convertedTemperature); 
 
   }
  
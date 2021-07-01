function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  for(var i=0;i<11;i++){
   console.log(randomInteger(20,25)) }
function genRand(min, max, decimalPlaces) {  
    var rand = Math.random() < 0.5 ? ((1-Math.random()) * (max-min) + min) : (Math.random() * (max-min) + min);  // could be min or max or anything in between
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand*power) / power;
}
for(var i=0;i<11;i++){
    console.log(genRand(25.130,25.175,3))
}

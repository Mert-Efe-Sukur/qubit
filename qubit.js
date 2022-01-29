var state = "True";
 var counter = 0; 
function isOdd(num) { return num % 2;} 
function decide() { if(isOdd(counter) == 1) 
{state = "0";} 
else {state = "1";} 
document.getElementById("truth").innerHTML = state; 
counter++; } 
setInterval(decide , 1);

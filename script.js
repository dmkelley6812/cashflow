

//Calculates tenant score from user input and updates tenantScoreLabel//
document.getElementById("calculate").onclick = function calculate() {

var propertyLocation = document.getElementById("propertyLocation").value;
var propertyExterior = document.getElementById("propertyExterior").value;
var propertyInterior = document.getElementById("propertyInterior").value;

var tenantScore = ((Number(propertyLocation))*.4)+((Number(propertyExterior))*.2)+((Number(propertyInterior))*.4);

document.getElementById("tenantScoreLabel").innerHTML = Math.round(tenantScore * 100)/100;

return false;
}


document.getElementById("clear").onclick= function clear(){

document.getElementById("propertyLocation").value = 1;
document.getElementById("propertyInterior").value = 1;
document.getElementById("propertyExterior").value = 1;
document.getElementById("tenantScoreLabel").innerHTML = "";
return false;
}





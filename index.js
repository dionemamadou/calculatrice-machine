//CALCULATOR PROGRAM par Dione Mamadou

const display = document.getElementById("display");



function appendTodisplay(input){
display.value += input;
}

function clearDisplay(){
display.value ="";
}

function calculate(){
try{
  display.value =eval(display.value);
}
catch(error){
  display.value = "Error";
}
} 
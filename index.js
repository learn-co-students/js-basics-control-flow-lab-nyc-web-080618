function scuberGreetingForFeet(value){
  if (value < 400) {
    return "This one is on me!";
  }
  else if (value > 2000 && value < 2500){
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do.";
  }
}


function ternaryCheckCity(entered_city){
  if (entered_city === "NYC"){
    return "Ok, sounds good.";
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(entered_tip){
  if (entered_tip === "generous"){
    return "Thank you so much.";
  }
  else if (entered_tip === 'not as generous'){
    return "Thank you."
  }
  else {
    return "Bye."
  }

}

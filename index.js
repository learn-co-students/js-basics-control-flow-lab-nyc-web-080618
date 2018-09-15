// Write your code in this file!
function scuberGreetingForFeet(ride) {
  let response
    if (ride <= 400) {
      response = 'This one is on me!';
    }
    else if (400 < ride && ride <= 2499) {
      response = 'I will gladly take your thirty bucks.';
    }
    else if (ride > 2500) {
      response = 'No can do.';
    }
  return response
}


function ternaryCheckCity(city) {
  return city === "NYC" ? ("Ok, sounds good.") : ("No go.");
}


function switchOnCharmFromTip(tip) {
  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
      break;
  }
  return response
}

let ride = 0;
function scuberGreetingForFeet(ride, distance) {
  if (ride <= 400) return "This one is on me!";
  else if (ride > 2000 && ride < 2500)
    return "I will gladly take your thirty bucks.";
  else if (ride > 2500) return "No can do.";
}

let city;
function ternaryCheckCity(city){
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  if (tip ==='generous'){
    return 'Thank you so much.'
  } else if (tip === 'not as generous'){
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
}

scuberGreetingForFeet(miles);
ternaryCheckCity(city);
switchOnCharmFromTip(tip);
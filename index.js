const feet = 2000;

function scuberGreetingForFeet(feet) {
  let cost;
  if (feet <= 400) {
    cost = 'This one is on me!';
  } else if (feet > 400, feet <= 2000) {
    cost = 'That will be twenty bucks.';
  } else if (feet > 2000, feet <= 2500) {
    cost = 'I will gladly take your thirty bucks.';
  } else {
    cost = 'No can do.';
  }
  return cost;
}



function switchOnCharmFromTip(tip) {
  switch (tip) {
    case 'Generous Tip':
      console.log('Thank you so much.');
      break;
    case 'Not Generous Tip':
      console.log('Thank you.');
      break;
    default:
      console.log('Bye.');
  }
}

const city = NYC;
function ternaryCheckCity(city) {
  return (city ? ('Ok, sounds good.') : ('No go.'))
}
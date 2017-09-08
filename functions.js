const gamma1 = ['red', 'yellow', 'green', 'blue', 'magenta'];
const gamma2 = ['orange', 'grey', 'purple', 'brown', 'darkblue'];

function getRandomColor(colors) {
  // var colors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return colors[Math.floor(Math.random() * colors.length)];
} // test comment

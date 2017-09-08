const gamma1 = ['red', 'yellow', 'green', 'blue', 'magenta'];
const gamma2 = ['orange', 'grey', 'purple', 'brown', 'darkblue'];

function getRandomColor(colors, color) {
  // var colors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  var temp = colors[Math.floor(Math.random() * colors.length)];
  while (temp == color) {
    temp = colors[Math.floor(Math.random() * colors.length)];
  }
  return temp;
} // test comment

document.addEventListener("DOMContentLoaded", function() {

  // var gamma1 = ['red', 'yellow', 'green', 'blue', 'magenta'];
  // var gamma2 = ['orange', 'grey', 'purple', 'brown', 'darkblue'];

  var color1 = '';
  var color2 = '';

  document.querySelectorAll('.first .btn-primary')[0].addEventListener("click", function() {
    color1 = getRandomColor(gamma1, color1);
    document.querySelectorAll('.first .inner')[0].style.backgroundColor = color1;
    console.log(color1);
  });

  document.querySelectorAll('.third .btn-primary')[0].addEventListener("click",function() {
    color2 = getRandomColor(gamma2, color2);
    document.querySelectorAll('.third .inner')[0].style.backgroundColor = color2;
    console.log(color2);
  });

  document.querySelectorAll('.first .btn-danger')[0].addEventListener("click", function() {
    document.querySelectorAll('.first .inner')[0].style.backgroundColor = 'black';
  });

  document.querySelectorAll('.third .btn-danger')[0].addEventListener("click", function() {
    document.querySelectorAll('.third .inner')[0].style.backgroundColor = 'black';
  });
});

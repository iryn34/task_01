document.addEventListener("DOMContentLoaded", function() {

  // var gamma1 = ['red', 'yellow', 'green', 'blue', 'magenta'];
  // var gamma2 = ['orange', 'grey', 'purple', 'brown', 'darkblue'];

  document.querySelectorAll('.first .btn-primary')[0].addEventListener("click", function() {
    document.querySelectorAll('.first .inner')[0].style.backgroundColor = getRandomColor(gamma1);
  });

  document.querySelectorAll('.third .btn-primary')[0].addEventListener("click",function() {
    document.querySelectorAll('.third .inner')[0].style.backgroundColor = getRandomColor(gamma2);
  });

  document.querySelectorAll('.first .btn-danger')[0].addEventListener("click", function() {
    document.querySelectorAll('.first .inner')[0].style.backgroundColor = 'black';
  });

  document.querySelectorAll('.third .btn-danger')[0].addEventListener("click", function() {
    document.querySelectorAll('.third .inner')[0].style.backgroundColor = 'black';
  });
});

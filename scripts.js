document.addEventListener("DOMContentLoaded", function() {
  var button, rectangle;
  button = document.querySelectorAll('.first .btn-primary');
  // console.log(button.length);
  button[0].addEventListener("click", function() {
    rectangle = document.querySelectorAll('.first .inner');
    // console.log(rectangle.length);
    rectangle[0].style.backgroundColor = getRandomColor();
  });

  button = document.getElementsByClassName('btn-danger');
  // console.log(button.length);
  button[0].addEventListener("click", function() {
    // console.log(rectangle.length);
    rectangle[0].style.backgroundColor = 'black';
  });
});

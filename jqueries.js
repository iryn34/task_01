$(document).ready(function() {

  var color1 = '';
  var color2 = '';

  $('.second .btn-primary').on('click', function() {
    color1 = getRandomColor(gamma1, color1);
    $('.second .inner').css('background-color', color1);
    console.log(color1);
  });

  $('.second .btn-danger').on('click', function() {
    $('.second .inner').css('background-color', 'black');
  });

  $('.fourth .btn-primary').on('click', function() {
    color2 = getRandomColor(gamma2, color2);
    $('.fourth .inner').css('background-color', color2);
    console.log(color2);
  });

  $('.fourth .btn-danger').on('click', function() {
    $('.fourth .inner').css('background-color', 'black');
  });

});

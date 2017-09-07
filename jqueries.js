$(document).ready(function() {

  $('.second .btn-primary').on('click', function() {
    $('.second .inner').css('background-color', getRandomColor());
  });

  $('.second .btn-danger').on('click', function() {
    $('.second .inner').css('background-color', 'black');
  });
});

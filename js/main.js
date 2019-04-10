/*

~~~~~~~Landing page effect~~~~~~~~

*/

// Hide and show the appeal on the home page

$(".landing").hide();
$(".landing").show('slow');

/*

~~~~~~~Menu effects~~~~~~~

*/

// Fixed menu when scroll, based on mariosm code from stackoverflow

// Caculate the relative top position of the menu
num = $('body nav:nth-child(2)').offset().top;

// Add a fixed class when the window scroll is bigger than the menu position
$(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('body nav:nth-child(2)').addClass('navbar-fixed-top').css('box-shadow', '6px 6px 6px black');
        }

// Take the class off when is not
        else {
            $('body nav:nth-child(2)').removeClass('navbar-fixed-top');
        }
   });

// When user look at the gallery image the fixed menu hide the image closing cross

// Take off the fixed top class when click on gallery images
$('.yoxview img').click(function() {
  $('body nav:nth-child(2)').removeClass('navbar-fixed-top');
});

/*

~~~~~~~~~~Overlay when click on a card~~~~~~~~~~~~~~

*/

$('.card-block a').click(function(event) {

// Creat a copy of the clicked card
  var $card = $(this).parents('.card').clone();

// Avoid to follow the link
  event.preventDefault();

// Add a div id overlay
  $('body').append('<div id="card_overlay">');
// Add the copied card to the overlay
  $('#card_overlay').append($card);
// Hide the voir link
  $('#card_overlay .card-block a').hide();
// Add an extra description after the first p
  $( "<p>Description supplémentaire à propos du bien en question</p>" ).insertAfter( '#card_overlay .card p' );

// On tablet and desktop the card takes the full width of the overlay
  if (window.matchMedia("(min-width: 767px)").matches) {
  $('#card_overlay .card img').css('float', 'left');
}

// Take off the overlay when the user clicks somewhere
  $('#card_overlay').click(function(event) {
    $(this).remove();
   });

});

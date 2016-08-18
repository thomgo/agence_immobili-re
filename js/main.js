// Hide and show the appeal on the home page

$(".landing").hide();
$(".landing").show('slow');

// Take off the fixed top class when click on gallery images
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

// Overlay when click on a card
$('.card-block a').click(function(event) {

var $card = $(this).parents('.card').clone();

// Avoid to follow the link
  event.preventDefault();

// Add a div id overlay
  $('body').append('<div id="card_overlay">');
  $('#card_overlay').append($card);

// Take off the overlay when the user clicks somewhere
  $('#card_overlay').click(function(event) {
    $(this).remove();
   });

});

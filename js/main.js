// Hide and show the appeal on the home page

$(".landing").hide();
$(".landing").show('slow');


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

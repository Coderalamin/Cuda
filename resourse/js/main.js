$(document).ready(function() {
    //mixitup

   var mixer = mixitup('.container');
    
//ScrollUp
    
    $.scrollUp({
         scrollText: '',
    });
    
    //Scroll Smooth
    
    $('.main-nav li a, .mobile-menu a, .scroll-down a').on('click',
      function() {
        $('html, body').animate({
        scrollTop: $($.attr(this, 
        'href')).offset().top
            
        }, 200);
         return false;
    });
    
});
    

function openNav() {
    document.getElementById("myNav").style.width ="100%";
}
function closeNav() {
    document.getElementById("myNav").style.width ="0%";
}







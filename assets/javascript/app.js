$(document).ready(function(){

        // Check if element is scrolled into view
        function isScrolledIntoView(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            
            var elemTop = $(elem).offset().top;
            var elemBottom = elemTop + $(elem).height();
            
            return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
            }
            // If element is scrolled into view, fade it in
            window.sr = ScrollReveal();
            // sr.reveal('.navbar')
            sr.reveal('.title');
            sr.reveal('#intro');
            sr.reveal('.abouttitle-liveshere');
        
        
            });
    

    // Smooth scrolling for nav links
    $(".about-click").click(function() {
      $("html, body").animate({
          scrollTop: $(".container-about").offset().top
      }, 800);
  })

  $(".projects-click").click(function() {
      $("html, body").animate({
          scrollTop: $(".projects-container").offset().top
      }, 800);
  })
  $(".contacts-click").click(function() {
      $("html, body").animate({
          scrollTop: $(".container-social").offset().top
      }, 800);
  })

  

  $(".btn-contact").on("click", function() {
      console.log("buttonClick");
      window.location.href = "mailto:elviracbarrientos@gmail.com?subject=Subject"; 
    });

    
    

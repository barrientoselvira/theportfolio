$(document).ready(function(){
    

    // Smooth scrolling for nav links
    $(".container-about").click(function() {
      $("html, body").animate({
          scrollTop: $("#about").offset().top
      }, 800);
  })

  $(".projects-click").click(function() {
      $("html, body").animate({
          scrollTop: $("#projects").offset().top
      }, 800);
  })
  $(".container-contact").click(function() {
      $("html, body").animate({
          scrollTop: $("#contact").offset().top
      }, 800);
  })

  

  $(".btn-contact").on("click", function() {
      console.log("buttonClick");
      window.location.href = "mailto:elviracbarrientos@gmail.com?subject=Subject"; 
    });

    
    
});
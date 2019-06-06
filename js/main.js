$(document).ready (function(){
  $("nav a").click(function(){
    //console.log("It works!");
    $(".active").removeClass("active");
    $(this).addClass("active");
  });
  $('.flexslider').flexslider();
});

$(document).ready(function() {
  $(".mainLowerContent").addClass("hideContent");
  $(".questionsContent").addClass("hideContent");

  $(".mainLowerContentHeader").on("click", function() {
    // $(".mainLowerContent").toggleClass("hideContent");
    var content = $(this).next();
    if (content.hasClass("mainLowerContent")) {
      content.slideToggle("hideContent");
    } else {
      content.find("li").slideToggle("hideContent");
    }
  });

  $(".questionsTop").on("click", function() {
    // $(".mainLowerContent").toggleClass("hideContent");
    var content = $(this).next();
    if (content.hasClass("questionsContent")) {
      content.slideToggle("hideContent");
    } else {
      content.find("li").slideToggle("hideContent");
    }
  });

});

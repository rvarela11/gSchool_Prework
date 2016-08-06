function highlightBox() {
  $(this).addClass("highlight");
}

function showBox() {
  $(this).addClass("highlight").showToggle();
}

$(document).ready(function() {
  $(".lowerBoxContentList li").addClass("hideContent");
  $(".lowerBoxContent p").addClass("hideContent");
  $(".lowerBoxHeading").on("mouseenter", highlightBox);
  $(".lowerBoxHeading").on("mouseleave", function() {
    $(this).removeClass("highlight");
  });
  $(".lowerBoxHeading").on("click", function() {
    var content = $(this).next();
    console.log(content);
    // if (content.hasClass("lowerBoxContent")) {
    //   content.children().toggleClass("hideContent");
    // } else {
    //   content.find("li").toggleClass("hideContent");
    // }
  });

});

// var index = $(this).parent().index();
// console.log(index);
// if ($(this).parent().index() === index) {
//   console.log("yes");
// } else {
//   console.log("no");
// }

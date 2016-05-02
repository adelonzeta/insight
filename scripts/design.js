$(document).ready(function () {
  // initialize slick sliders
  $("div[data-slick]").slick();

  // mouseover behavior in page navigation
  $(".navigation .page-navigation .dropdown").mouseover(function () {
    $(this).addClass("open");
  }).mouseout(function () {
    $(this).removeClass("open");
  });
  $('.btn-input').click(function () {
    $(this).next().click();
  });
});

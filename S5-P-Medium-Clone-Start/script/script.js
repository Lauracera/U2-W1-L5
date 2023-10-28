$(window).scroll(function (event) {
  let y = $(this).scrollTop();

  if (y <= 79) {
    $("#div-nav").addClass("animate");
  }
});

$(function () {
  /***** header *****/
  $("header").addClass("on");

  /***** header nav *****/
  $("#header .nav li").click(function () {
    $("#header .nav li").removeClass("on");
    $(this).addClass("on");
  });

  //siteNav
  let nav_btn = 0;
  $("#header .siteNav h4").click(function () {
    if (nav_btn == 0) {
      $("#header .siteNav ul").animate(
        {
          height: "280px",
        },
        500
      );
      $("#header .siteNav h4 span").addClass("on");
      nav_btn = 1;
    } else {
      $("#header .siteNav ul").animate(
        {
          height: "0px",
        },
        500
      );
      $("#header .siteNav h4 span").removeClass("on");
      nav_btn = 0;
    }
  });
});

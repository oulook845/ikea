$(function () {
  /***** scroll *****/
  let topOut = 500;
  let con1Top = $("#con1").offset().top - topOut,
    con2Top = $("#con2").offset().top - topOut,
    con3Top = $("#con3").offset().top - topOut,
    con5Top = $("#con5").offset().top - topOut;

  $("#con1").addClass("on");
  window.addEventListener("scroll", function () {
    let viewPoint = window.scrollY;
    //con1
    if (viewPoint >= con1Top && viewPoint < con2Top) {
      //현재 콘텐츠와 같은 nav 표시
      $(".nav ul li").removeClass("on");
      $(".nav ul li").eq(0).addClass("on");
    }

    //con2
    if (viewPoint >= con2Top && viewPoint < con3Top) {
      //현재 콘텐츠와 같은 nav 표시
      $(".nav ul li").removeClass("on");
      $(".nav ul li").eq(1).addClass("on");
    }

    //con3
    if (viewPoint >= con3Top && viewPoint < con5Top) {
      //현재 콘텐츠와 같은 nav 표시
      $(".nav ul li").removeClass("on");
      $(".nav ul li").eq(2).addClass("on");
    }

    //con4
    if (viewPoint >= con5Top) {
      //현재 콘텐츠와 같은 nav 표시
      $(".nav ul li").removeClass("on");
      $(".nav ul li").eq(3).addClass("on");
    }
  });

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

  /***** banner *****/
  $(".banner").addClass("on");

  /***** con2 *****/
  $("#con2 .slideNav li").click(function () {
    let i = $(this).index();
    $("#con2 .slideNav li").removeClass("on");
    $(this).addClass("on");
    $("#con2 .slideCon li").removeClass("on");
    $("#con2 .slideCon li").eq(i).addClass("on");
  });

  /***** con3 *****/
  $("#con3 .slideNav li").click(function () {
    let i = $(this).index();
    $("#con3 .slideNav li").removeClass("on");
    $(this).addClass("on");
    $("#con3 .slideCon li").removeClass("on");
    $("#con3 .slideCon li").eq(i).addClass("on");
    $("#con3 .slideBtn h4").text("Story 0" + (i + 1));
  });

  /***** con5 *****/
  $("#con5 .con5_list li").click(function () {
    $("#con5 .con5_list li").removeClass("on");
    $(this).addClass("on");
    $("#con5 .con5_list li p").stop().slideUp();
    $(this).find("p").stop().slideDown();
  });
});

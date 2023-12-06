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
  /***** banner *****/
  $(".banner").addClass("on");

  /***** con3 *****/
  $("#con2 .slideNav li").click(function () {
    let i = $(this).index();
    $("#con2 .slideNav li").removeClass("on");
    $(this).addClass("on");
    $("#con2 .slideCon li").removeClass("on");
    $("#con2 .slideCon li").eq(i).addClass("on");
    $("#con2 .slideBtn h4").text("Story 0" + (i + 1));
  });

  /***** con5 *****/
  //con5 slide

  //버튼 클릭시 슬라이드 이동
  $("#con5 .slideNav .next").click(function () {
    $("#con5 .ingvar_talk")
      .stop()
      .animate(
        {
          left: "-100%",
        },
        800,
        function () {
          $("#con5 .ingvar_talk li").first().appendTo("#con5 .ingvar_talk");
          $("#con5 .ingvar_talk").css({
            left: "0%",
          });
        }
      );
  });
  $("#con5 .slideNav .prev").click(function () {
    $("#con5 .ingvar_talk li").last().prependTo("#con5 .ingvar_talk");
    $("#con5 .ingvar_talk").css({
      left: "-100%",
    });

    $("#con5 .ingvar_talk").stop().animate(
      {
        left: "0%",
      },
      800
    );
  });
});

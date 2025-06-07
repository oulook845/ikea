$(function () {
  /***** header *****/
  $("header").addClass("on");

  /***** header nav *****/
  $("#header .nav li").click(function () {
    $("#header .nav li").removeClass("on");
    $(this).addClass("on");
  });

   // con 도착하면 해당 컨텐츠와 같은 nav li에 addClass
  let conList = $(".con");
  let conList_top = new Array();

  conList.each((idx, con) => {
    let conTop = con.offsetTop;
    conList_top.push(conTop);
  });
  window.addEventListener("scroll", function () {
    let currentScroll = parseInt(window.scrollY) + ($(window).height() / 2);

    if (currentScroll > conList_top[0] && currentScroll < conList_top[1]) {
      $("#header .nav li").removeClass("on");
      $("#header .nav li").eq(0).addClass("on");
    }else if(currentScroll > conList_top[1] && currentScroll < conList_top[2]){
      $("#header .nav li").removeClass("on");
      $("#header .nav li").eq(1).addClass("on");
    }else if(currentScroll > conList_top[2]){
      $("#header .nav li").removeClass("on");
      $("#header .nav li").eq(2).addClass("on");
    }
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

$(function () {
  /***** header *****/
  $("header").addClass("on");

  /***** header nav *****/
  $("#header .nav li").click(function () {
    $("#header .nav li").removeClass("on");
    $(this).addClass("on");
  });

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
    }else if(currentScroll > conList_top[2] && currentScroll < conList_top[3]){
      $("#header .nav li").removeClass("on");
      $("#header .nav li").eq(2).addClass("on");
    }else if(currentScroll > conList_top[3] && currentScroll < conList_top[4]){
      $("#header .nav li").removeClass("on");
      $("#header .nav li").eq(3).addClass("on");
    }else if(currentScroll > conList_top[4] && currentScroll < conList_top[5]){
      $("#header .nav li").removeClass("on");
      $("#header .nav li").eq(4).addClass("on");
    }else if(currentScroll > conList_top[5] && currentScroll < conList_top[6]){
      $("#header .nav li").removeClass("on");
      $("#header .nav li").eq(5).addClass("on");
    }else if(currentScroll > conList_top[6]){
      $("#header .nav li").removeClass("on");
      $("#header .nav li").eq(6).addClass("on");
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
});

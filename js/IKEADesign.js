$(function () {
  /***** scroll *****/
  let topOut = 500;
  let con1Top = $("#con1").offset().top - topOut,
    con2Top = $("#con2").offset().top - topOut,
    con3Top = $("#con3").offset().top - topOut;

  window.addEventListener("scroll", function () {
    let viewPoint = window.scrollY;
    if (viewPoint >= 0 && viewPoint < con1Top) {
      $(".nav ul li").removeClass("on");
    }
    if (viewPoint >= con1Top && viewPoint < con2Top) {
      $("#con1").addClass("on");

      //현재 콘텐츠와 같은 nav 표시
      $(".nav ul li").removeClass("on");
      $(".nav ul li").eq(0).addClass("on");
    }
    if (viewPoint >= con2Top && viewPoint < con3Top) {
      $("#con2").addClass("on");

      //현재 콘텐츠와 같은 nav 표시
      $(".nav ul li").removeClass("on");
      $(".nav ul li").eq(1).addClass("on");
    }
    if (viewPoint >= con3Top) {
      $("#con3").addClass("on");

      //현재 콘텐츠와 같은 nav 표시
      $(".nav ul li").removeClass("on");
      $(".nav ul li").eq(2).addClass("on");
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

  /***** con1 *****/
  //slide
  //arrow
  let con1SlideIndex = 0;
  let con1SlideTotal = $("#con1 .slides li").length - 1;

  $("#con1 .arrow p").click(function () {
    $(this).addClass("down");
    setTimeout(function () {
      $("#con1 .arrow p").removeClass("down");
    }, 300);
  });

  //slideNav 클릭시 slide 이동
  $("#con1 .slideNav li").click(function () {
    $("#con1 .slideNav li").removeClass("on");
    $(this).addClass("on");

    let index = $(this).index();
    con1SlideIndex = index;

    //처음과 끝에 버튼 지우기
    if (con1SlideIndex == 0) {
      $("#con1 .arrow .next").removeClass("on");
      $("#con1 .arrow .prev").addClass("on");
    } else if (con1SlideIndex == 13) {
      $("#con1 .arrow .prev").removeClass("on");
      $("#con1 .arrow .next").addClass("on");
    } else {
      $("#con1 .arrow .next").removeClass("on");
      $("#con1 .arrow .prev").removeClass("on");
    }

    if (index == 12) {
      con1SlideIndex = 16;
    } else if (index == 13) {
      con1SlideIndex = 17;
    }
    $("#con1 .slides ul")
      .stop()
      .animate({
        top: con1SlideIndex * -100 + "%",
      });
  });

  //버튼 클릭시 slideNav class적용
  function ifSlideNav() {
    if (con1SlideIndex >= 11 && con1SlideIndex <= 15) {
      $("#con1 .slideNav li").removeClass("on");
      $("#con1 .slideNav li").eq(11).addClass("on");
    } else if (con1SlideIndex == 16) {
      $("#con1 .slideNav li").removeClass("on");
      $("#con1 .slideNav li").eq(12).addClass("on");
    } else if (con1SlideIndex == 17) {
      $("#con1 .slideNav li").removeClass("on");
      $("#con1 .slideNav li").eq(13).addClass("on");
    } else {
      $("#con1 .slideNav li").removeClass("on");
      $("#con1 .slideNav li").eq(con1SlideIndex).addClass("on");
    }
  }

  // 슬라이드 이전 버튼
  $("#con1 .arrow .prev").click(function () {
    let prev = -100;
    con1SlideIndex = con1SlideIndex - 1;

    $("#con1 .slides ul")
      .stop()
      .animate({
        top: con1SlideIndex * prev + "%",
      });

    if (con1SlideIndex > 0) {
      $("#con1 .arrow .next").removeClass("on"); //마지막 이미지가 아니라면 다음버튼 보이기
    } else if (con1SlideIndex <= 0) {
      $("#con1 .arrow .prev").addClass("on"); //처음 이미지에서 이전버튼 없애기
    }
    ifSlideNav();
  });

  // 슬라이드 다음 버튼
  $("#con1 .arrow .next").click(function () {
    let next = -100;
    con1SlideIndex = con1SlideIndex + 1;

    $("#con1 .slides ul")
      .stop()
      .animate({
        top: con1SlideIndex * next + "%",
      });

    //마지막 이미지에서 다음버튼 없애기
    if (con1SlideIndex < con1SlideTotal) {
      $("#con1 .arrow .prev").removeClass("on"); //처음 이미지가 아니라면 이전버튼 보이기
    } else if (con1SlideIndex >= con1SlideTotal) {
      $("#con1 .arrow .next").addClass("on"); //마지막 이미지에서 다음버튼 없애기
    }
    ifSlideNav();
  });

  /* inform icon */
  $("#con1 .inform .inform_icon").click(function () {
    $("#con1 .inform p").stop().slideToggle();
  });

  /***** con2 *****/
  /* selectBox */
  let con2Click = 0;
  $("#con2 .selectBox .years").click(function () {
    if (con2Click == 0) {
      $("#con2 .selectBox .optionList").slideDown();
      $("#con2 .selectBox .years span").addClass("on");
      con2Click = 1;
    } else if (con2Click == 1) {
      $("#con2 .selectBox .optionList").slideUp();
      $("#con2 .selectBox .years span").removeClass("on");
      con2Click = 0;
    }
  });
  $("#con2 .selectBox .option").click(function () {
    currentYears = parseInt($(this).text(), 10);
    catalogue_years = currentYears;
    con2Click = 0;
    $("#con2 .selectBox .optionList").slideUp();
    $("#con2 .selectBox .years p").text(catalogue_years);
    $(".catalogueList li").removeClass("none");
    imgYears();
  });

  /* catalogue 버튼 클릭시 slide*/
  let catalogue_years = 1950;

  //이전버튼
  $("#con2 .listWrap .prev").click(function () {
    catalogue_years = catalogue_years - 10;
    $("#con2 .selectBox .years p").text(catalogue_years); //년도 수정

    $(".catalogueList li").removeClass("none");
    $("#con2 .listWrap .next").removeClass("none"); //버튼 보이기
    imgYears(); //이미지, 텍스트 년도수정
  });

  //다음버튼
  $("#con2 .listWrap .next").click(function () {
    catalogue_years = catalogue_years + 10;
    $("#con2 .selectBox .years p").text(catalogue_years); //년도 수정

    $("#con2 .listWrap .prev").removeClass("none"); //버튼 보이기
    imgYears(); //이미지, 텍스트 년도수정
  });

  //이미지 년도 수정
  function imgYears() {
    for (i = 0; i < 10; i++) {
      result = catalogue_years + i;
      $(".catalogueList li")
        .eq(i)
        .find("img")
        .attr("src", "img/catal_" + result + ".jpg");
      $(".catalogueList li").eq(i).find("p").text(result);
    }

    // 이미지가 끝일 경우 버튼 삭제
    if (catalogue_years <= 1950) {
      $("#con2 .listWrap .prev").addClass("none"); //버튼 삭제
    } else {
      $("#con2 .listWrap .prev").removeClass("none");
    }
    if (catalogue_years >= 2020) {
      $("#con2 .listWrap .next").addClass("none"); //버튼 삭제
      for (list = 2; list < 10; list++) {
        $(".catalogueList li").eq(list).addClass("none");
      }
    } else {
      $("#con2 .listWrap .next").removeClass("none");
    }
  }

  /***** con3 *****/
  $("#con3 h4").click(function () {
    $("#con3 p").stop().slideUp();
    $(this).siblings("p").stop().slideDown();
    $("#con3 h4 span").removeClass("on");
    $(this).find("span").addClass("on");
  });
});

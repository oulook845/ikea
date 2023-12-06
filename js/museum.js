$(function () {
  let windowWidth = $(window).width();
  /***** scroll *****/
  let topOut = 500;
  let con1Top = $("#con1").offset().top - topOut,
    con2Top = $("#con2").offset().top - topOut,
    con3Top = $("#con3").offset().top - topOut,
    collect2Top = $(".collection_02").offset().top - topOut,
    collect3Top = $(".collection_03").offset().top - topOut,
    collect4Top = $(".collection_04").offset().top - topOut,
    collect5Top = $(".collection_05").offset().top - topOut,
    con4Top = $("#con4").offset().top - topOut,
    con5Top = $("#con5").offset().top - topOut;

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
    if (viewPoint >= con3Top && viewPoint < collect2Top) {
      $("#con3").addClass("on");
    }
    if (viewPoint >= collect2Top && viewPoint < collect3Top) {
      $(".collection_02").addClass("on");
    }
    if (viewPoint >= collect3Top && viewPoint < collect4Top) {
      $(".collection_03").addClass("on");
    }
    if (viewPoint >= collect4Top && viewPoint < collect5Top) {
      $(".collection_04").addClass("on");
    }
    if (viewPoint >= collect5Top && viewPoint < con4Top) {
      $(".collection_05").addClass("on");
    }

    if (viewPoint >= con4Top && viewPoint < con5Top) {
      $("#con4").addClass("on");

      //현재 콘텐츠와 같은 nav 표시
      $(".nav ul li").removeClass("on");
      $(".nav ul li").eq(2).addClass("on");
    }
    if (viewPoint >= con5Top) {
      $("#con5").addClass("on");

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

  //header 맨위 도착시 클래스 해제 및 부여
  $(".nav h4").click(function () {
    $(".banner").removeClass("on");
    $("#visual").removeClass("on");

    setTimeout(function () {
      $(".banner").addClass("on");
      $("#visual").addClass("on");
    }, 50);
  });

  //header nav 클릭시 해당 content 이동
  $(".nav li").click(function () {
    //con 클래스 모두 지웠다가 적용
    for (i = 1; i < 6; i++) {
      let conName = "#con" + i;
      $(conName).removeClass("on");
    }
    //collection 클래스 모두 지웠다가 적용
    for (i = 1; i < 6; i++) {
      let collectName = ".collection_0" + i;
      $(collectName).removeClass("on");
    }

    //클릭한 경로를 가져와 클래스 부여
    target = $(this).children("a").attr("href");
    setTimeout(function () {
      $(target).addClass("on");
    }, 500);
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
  $(".content .banner").addClass("on");

  /***** visual *****/
  $("#visual").addClass("on");
  //text 내용 바꾸기
  $("#visual .bgBlue").mouseenter(function () {
    $(this).find("p").text("우리는 당신을 만나기를 기대합니다.");
  });
  $("#visual .bgBlue").mouseleave(function () {
    $(this).find("p").text("We look forward to meeting you.");
  });

  //비주얼 파란 박스 클릭하면 효과 주기
  $("#visual .bgBlue").click(function () {
    $("#visual .heart").addClass("on");
    setTimeout(function () {
      $("#visual .heart").removeClass("on");
    }, 500);
  });

  /***** con2 *****/
  let icon = 0;
  $(".inform_icon").click(function () {
    if (icon == 0) {
      $(".textWrap p").slideUp();
      icon = 1;
    } else {
      $(".textWrap p").slideDown();
      icon = 0;
    }
  });
  //con2 파란 박스 클릭하면 효과 주기
  $("#con2 .store_con1 .bgBlue").click(function () {
    $("#con2 .store_con1 .heart").addClass("on");
    setTimeout(function () {
      $("#con2 .store_con1 .heart").removeClass("on");
    }, 500);
  });

  /***** con3 collection_01 *****/
  let con3Slide = -500;
  // if (windowWidth > 1200) {
  //   con3Slide = -500;
  // } else if (windowWidth <= 1200) {
  //   con3Slide = -500;
  // }
  let con3SlideIndex = 0;
  let con3SlideTotal = $("#con3 .collection_01 .imgList ul li").length - 1;

  //이전 버튼 클릭시 이미지 슬라이드
  $("#con3 .collection_01 .prev").click(function () {
    con3SlideIndex = con3SlideIndex - 1;
    $("#con3 .collection_01 .imgList ul")
      .stop()
      .animate({
        left: con3SlideIndex * con3Slide + "px",
      });

    if (con3SlideIndex > 0) {
      $("#con3 .collection_01 .next").removeClass("on"); //마지막 이미지가 아니라면 다음버튼 보이기
    } else if (con3SlideIndex <= 0) {
      $("#con3 .collection_01 .prev").addClass("on"); //처음 이미지에서 이전버튼 없애기
    }
  });

  //다음 버튼 클릭시 이미지 슬라이드
  $("#con3 .collection_01 .next").click(function () {
    con3SlideIndex = con3SlideIndex + 1;
    $("#con3 .collection_01 .imgList ul")
      .stop()
      .animate({
        left: con3SlideIndex * con3Slide + "px",
      });

    //마지막 이미지에서 다음버튼 없애기
    if (con3SlideIndex < con3SlideTotal) {
      $("#con3 .collection_01 .prev").removeClass("on"); //처음 이미지가 아니라면 이전버튼 보이기
    } else if (con3SlideIndex >= con3SlideTotal) {
      $("#con3 .collection_01 .next").addClass("on"); //마지막 이미지에서 다음버튼 없애기
    }
  });

  /***** con3 collection_05 *****/
  let con3Slide2;
  if (windowWidth > 1200) {
    con3Slide2 = -800;
  } else if (windowWidth <= 1200 && windowWidth > 768) {
    con3Slide2 = -700;
  } else if (windowWidth <= 768) {
    con3Slide2 = -500;
  }
  let con3SlideIndex2 = 0;
  let con3SlideTotal2 = $("#con3 .collection_05 .imgList ul li").length - 1;

  //이전 버튼 클릭시 이미지 슬라이드
  $("#con3 .collection_05 .prev").click(function () {
    con3SlideIndex2 = con3SlideIndex2 - 1;
    $("#con3 .collection_05 .imgList ul")
      .stop()
      .animate({
        left: con3SlideIndex2 * con3Slide2 + "px",
      });

    if (con3SlideIndex2 > 0) {
      $("#con3 .collection_05 .next").removeClass("on"); //마지막 이미지가 아니라면 다음버튼 보이기
    } else if (con3SlideIndex2 <= 0) {
      $("#con3 .collection_05 .prev").addClass("on"); //처음 이미지에서 이전버튼 없애기
    }
  });

  //다음 버튼 클릭시 이미지 슬라이드
  $("#con3 .collection_05 .next").click(function () {
    con3SlideIndex2 = con3SlideIndex2 + 1;
    $("#con3 .collection_05 .imgList ul")
      .stop()
      .animate({
        left: con3SlideIndex2 * con3Slide2 + "px",
      });

    //마지막 이미지에서 다음버튼 없애기
    if (con3SlideIndex2 < con3SlideTotal2) {
      $("#con3 .collection_05 .prev").removeClass("on"); //처음 이미지가 아니라면 이전버튼 보이기
    } else if (con3SlideIndex2 >= con3SlideTotal2) {
      $("#con3 .collection_05 .next").addClass("on"); //마지막 이미지에서 다음버튼 없애기
    }
  });
  /***** con4 *****/
  $("#con4 .serviceNav li").click(function () {
    let serviceIndex = $(this).index();

    //클릭한 nav 메뉴 표시
    $("#con4 .serviceNav li").removeClass("on");
    $(this).addClass("on");

    //클릭한 nav 메뉴에 대한 내용이 보임
    $("#con4 .serviceCon li").removeClass("on");
    $("#con4 .serviceCon li").eq(serviceIndex).addClass("on");
  });
});

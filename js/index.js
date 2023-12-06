$(function () {
  //header blur 효과
  window.addEventListener("scroll", function () {
    let viewPoint = window.scrollY;
    let topOut = 250;
    let con1Top = $(".con1").offset().top - topOut,
      con2Top = $(".con2").offset().top - topOut,
      con3Top = $(".con3").offset().top - topOut,
      con4Top = $(".con4").offset().top - topOut,
      con5Top = $(".con5").offset().top - topOut;
    // console.log(viewPoint);
    if (viewPoint !== 0) {
      $("header").addClass("on");
    } else {
      $("header").removeClass("on");
    }
    if (viewPoint >= con1Top) {
      $(".con1").addClass("on");
    }
    if (viewPoint >= con2Top) {
      $(".con2").addClass("on");
    }
    if (viewPoint >= con3Top) {
      $(".con3").addClass("on");
    }
    if (viewPoint >= con4Top) {
      $(".con4").addClass("on");
    }
    if (viewPoint >= con5Top) {
      $(".con5").addClass("on");
    }
  });

  /***** con1 *****/
  //con1 커스텀 커서 적용
  $(".con_wrap img").mousemove(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    // console.log(mouseX, mouseY);

    $(".con_wrap .custom_cursor").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });

  // mouseenter 시에만 커스텀 커서 보이기
  $(" .con_wrap figure").mouseenter(function () {
    $(this).siblings(".custom_cursor").css({
      opacity: "1",
    });
  });
  $(" .con_wrap figure").mouseleave(function () {
    $(this).siblings(".custom_cursor").css({
      opacity: "0",
    });
  });

  // 커스텀 커서 클릭시 이벤트
  $(" .con_wrap a img").mousedown(function () {
    $(".con_wrap .custom_cursor").css({
      width: "5rem",
      height: "5rem",
      fontSize: "1rem",
    });
  });
  $(" .con_wrap a img").mouseup(function () {
    $(".con_wrap .custom_cursor").css({
      width: "8rem",
      height: "8rem",
      fontSize: "2rem",
    });
  });

  //con4 커스텀 커서 적용
  $(".con4 .logoSlide").mousemove(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    // console.log(mouseX, mouseY);

    $(".con4 .logoSlide .custom_cursor").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });

  // slide에서 커스텀 커서 보이기
  $(".con4 .logoSlide .slide_wrap").mouseenter(function () {
    $(this).find(".custom_cursor").css({
      opacity: "1",
    });
  });
  $(".con4 .logoSlide .slide_wrap").mouseleave(function () {
    $(this).find(".custom_cursor").css({
      opacity: "0",
    });
  });

  // slide에서 클릭시 이벤트
  $(" .slide_wrap").mousedown(function () {
    $(".slide_wrap .custom_cursor").css({
      width: "5rem",
      height: "5rem",
      fontSize: "1rem",
    });
  });
  $(" .slide_wrap").mouseup(function () {
    $(".slide_wrap .custom_cursor").css({
      width: "8rem",
      height: "8rem",
      fontSize: "2rem",
    });
  });

  //con4 catalogue 슬라이드
  let i = 1;

  setInterval(catal_trans, 1500);

  function catal_trans() {
    let catalogue_total = $(".con4 .catalogueSlide .slide_img li").length;
    if (i < catalogue_total) {
      $(".con4 .catalogueSlide .slide_img li").removeClass("on");
      $(".con4 .catalogueSlide .slide_img li").eq(i).addClass("on");
      i++;
    } else {
      $(".con4 .catalogueSlide .slide_img li").removeClass("on");
      $(".con4 .catalogueSlide .slide_img li").eq(0).addClass("on");
      i = 1;
    }
  }

  //con5 product 슬라이드
  setInterval(function () {
    //1950년도
    $(".con5 .pro_1950s a ul")
      .stop()
      .animate(
        {
          bottom: "-100%",
        },
        1000,
        function () {
          $(".con5 .pro_1950s a ul li").last().prependTo(".pro_1950s a ul");
          $(".con5 .pro_1950s a ul").css({
            bottom: "0",
          });
        }
      );
    //1960년도
    $(".con5 .pro_1960s a ul")
      .stop()
      .animate(
        {
          right: "-100%",
        },
        1000,
        function () {
          $(".con5 .pro_1960s a ul li").last().prependTo(".pro_1960s a ul");
          $(".con5 .pro_1960s a ul").css({
            right: "0",
          });
        }
      );
    //1970년도
    $(".con5 .pro_1970s a ul")
      .stop()
      .animate(
        {
          bottom: "-100%",
        },
        1000,
        function () {
          $(".con5 .pro_1970s a ul li").last().prependTo(".pro_1970s a ul");
          $(".con5 .pro_1970s a ul").css({
            bottom: "0",
          });
        }
      );
    //1980년도
    $(".con5 .pro_1980s a ul")
      .stop()
      .animate(
        {
          top: "-100%",
        },
        1000,
        function () {
          $(".con5 .pro_1980s a ul li").first().appendTo(".pro_1980s a ul");
          $(".con5 .pro_1980s a ul").css({
            top: "0",
          });
        }
      );
    //1990년도
    $(".con5 .pro_1990s a ul")
      .stop()
      .animate(
        {
          left: "-100%",
        },
        1000,
        function () {
          $(".con5 .pro_1990s a ul li").first().appendTo(".pro_1990s a ul");
          $(".con5 .pro_1990s a ul").css({
            left: "0",
          });
        }
      );
    //2000년도
    $(".con5 .pro_2000s a ul")
      .stop()
      .animate(
        {
          top: "-100%",
        },
        1000,
        function () {
          $(".con5 .pro_2000s a ul li").first().appendTo(".pro_2000s a ul");
          $(".con5 .pro_2000s a ul").css({
            top: "0",
          });
        }
      );
    //2010년도
    $(".con5 .pro_2010s a ul")
      .stop()
      .animate(
        {
          left: "-100%",
        },
        1000,
        function () {
          $(".con5 .pro_2010s a ul li").first().appendTo(".pro_2010s a ul");
          $(".con5 .pro_2010s a ul").css({
            left: "0",
          });
        }
      );
  }, 2000);

  /////////////////////////////////////////
});

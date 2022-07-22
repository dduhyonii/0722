$(document).ready(function() { 

    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".sub_bg").stop().slideDown();
    });
    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".sub_bg").stop().slideUp();
    });

    //#section2 슬라이드
    var swiper = new Swiper(".swiper1", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true, //반복
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        }, //자동실행
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }, //네비게이션
        pagination: {
            el: ".swiper-pagination",
        }, //페이지
    });

    //#section4 슬라이드
    var swiper = new Swiper(".swiper2", {
        slidesPerView: 2,
        spaceBetween:20,
        loop: true,  //반복
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },  //자동실행
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
        }, //스크롤바
        breakpoints: {
            761: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },  // 반응형

    });



    // moblie 메뉴 작업
    $(".header_mo").click(function(){
        $(".menu1-moblie").show();
    });
    $(".menu1-moblie").click(function(){
        $(this).hide();
        $(".menu1-moblie").hide();
        $(".close_btn").hihe();
    });






    // #section6 팝업창
    $(".insta1 li").eq(0).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(0).show();
    });
    $(".insta2 li").eq(0).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });

    $(".insta1 li").eq(1).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(1).show();
    });
    $(".insta2 li").eq(1).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });


    $(".insta1 li").eq(2).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(2).show();
    });
    $(".insta2 li").eq(2).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });


    $(".insta1 li").eq(3).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(3).show();
    });
    $(".insta2 li").eq(3).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });


    $(".insta1 li").eq(4).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(4).show();
    });
    $(".insta2 li").eq(4).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });


    $(".insta1 li").eq(5).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(5).show();
    });
    $(".insta2 li").eq(5).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });


    $(".insta1 li").eq(6).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(6).show();
    });
    $(".insta2 li").eq(6).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });


    $(".insta1 li").eq(7).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(7).show();
    });
    $(".insta2 li").eq(7).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });


    $(".insta1 li").eq(8).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(8).show();
    });
    $(".insta2 li").eq(8).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });


    $(".insta1 li").eq(9).click(function(){
        $(".insta2").show();
        $(".insta2 li").eq(9).show();
    });
    $(".insta2 li").eq(9).click(function(){
        $(this).hide();
        $(".insta2").hide();
    });



    // sub setion3

    $(".sec3-list li").eq(0).click(function(){
        $(".border2").show();
        $(".border2 li").eq(0).show();
    });
    $(".border2").click(function(){
        $(this).hide();
    });


    $(".sec3-list li").eq(1).click(function(){
        $(".border2").show();
        $(".border2 li").eq(1).show();
    });

    $(".sec3-list li").eq(2).click(function(){
        $(".border2").show();
        $(".border2 li").eq(2).show();
    });

    $(".sec3-list li").eq(3).click(function(){
        $(".border2").show();
        $(".border2 li").eq(3).show();
    });

    $(".sec3-list li").eq(4).click(function(){
        $(".border2").show();
        $(".border2 li").eq(4).show();
    });

    $(".sec3-list li").eq(5).click(function(){
        $(".border2").show();
        $(".border2 li").eq(5).show();
    });

    $(".sec3-list li").eq(6).click(function(){
        $(".border2").show();
        $(".border2 li").eq(6).show();
    });

    $(".sec3-list li").eq(7).click(function(){
        $(".border2").show();
        $(".border2 li").eq(7).show();
    });

    $(".sec3-list li").eq(8).click(function(){
        $(".border2").show();
        $(".border2 li").eq(8).show();
    });

    $(".sec3-list li").eq(9).click(function(){
        $(".border2").show();
        $(".border2 li").eq(9).show();
    });

    $(".sec3-list li").eq(10).click(function(){
        $(".border2").show();
        $(".border2 li").eq(10).show();
    });

    $(".sec3-list li").eq(11).click(function(){
        $(".border2").show();
        $(".border2 li").eq(11).show();
    });

    $(".sec3-list li").eq(12).click(function(){
        $(".border2").show();
        $(".border2 li").eq(12).show();
    });

    $(".sec3-list li").eq(13).click(function(){
        $(".border2").show();
        $(".border2 li").eq(13).show();
    });

    $(".sec3-list li").eq(14).click(function(){
        $(".border2").show();
        $(".border2 li").eq(14).show();
    });

    $(".sec3-list li").eq(15).click(function(){
        $(".border2").show();
        $(".border2 li").eq(15).show();
    });

    $(".sec3-list li").eq(16).click(function(){
        $(".border2").show();
        $(".border2 li").eq(16).show();
    });

    $(".sec3-list li").eq(17).click(function(){
        $(".border2").show();
        $(".border2 li").eq(17).show();
    });

    $(".sec3-list li").eq(18).click(function(){
        $(".border2").show();
        $(".border2 li").eq(18).show();
    });

    $(".sec3-list li").eq(19).click(function(){
        $(".border2").show();
        $(".border2 li").eq(19).show();
    });

    $(".sec3-list li").eq(20).click(function(){
        $(".border2").show();
        $(".border2 li").eq(20).show();
    });



    
});  //문서가 로딩되면 스크립트실행


// .attr() - 선택자의 HTML태그 속성 변경.
// .show() - 선택요소 보임.
// .hide() - 선택요소 숨김. (팝업창)
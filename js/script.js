$(function () {


    // =====Pre Loader===== //
     
    // var loader = document.getElementById("loader");
    // window.addEventListener("load", function () {

    //     loader.style.visibility = "hidden";

    // });

    // ======Menufix===== //

    //    var navoff = $(".main_menu").offset().top;
    //
    //    $(window).scroll(function () {
    //        var scrolling = $(this).scrollTop();
    //
    //        if (scrolling > navoff) {
    //            $(".main_menu").addClass("menu_fix");
    //        } else {
    //            $(".main_menu").removeClass("menu_fix");
    //        }
    //    });


     // =====Closes responsive menu when a scroll link is clicked===== //

     $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    // ======Smooth Scroll===== //

    // $('a[href*="#"]')
    //     .not('[href="#"]')
    //     .not('[href="#0"]')
    //     .click(function (event) {
    //         if (
    //             location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
    //             location.hostname == this.hostname
    //         ) {
    //             var target = $(this.hash);
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //             if (target.length) {
    //                 event.preventDefault();
    //                 $('html, body').animate({
    //                     scrollTop: target.offset().top
    //                 }, 1000, function () {
    //                     var $target = $(target);
    //                     $target.focus();
    //                     if ($target.is(":focus")) {
    //                         return false;
    //                     } else {
    //                         $target.attr('tabindex', '-1');
    //                         $target.focus();
    //                     };
    //                 });
    //             }
    //         }
    //     });

  
    // ======Slick Slider===== //

//     $('.').slick({
//         dots: false,
//         infinite: true,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 1000,
//         speed: 1300,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                 }
//     }, {
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 }
//     }
//   ]

//     });




    // =====scroll top===== //


    // $(".scroll_top").on('click', function () {
    //     $("html,body").animate({
    //         scrollTop: 0,
    //     }, 800);
    // });
    // $(window).on('scroll', function () {
    //     var scrolling = $(this).scrollTop();

    //     if (scrolling > 200) {
    //         $(".scroll_top").fadeIn();
    //     } else {
    //         $(".scroll_top").fadeOut();
    //     }
    // });



    // =====Aos Js===== n//

    AOS.init();



});

$(".sub-button1").click(function(){
    $(".sub--content__one").fadeIn()
    $(".sub--content__two").fadeOut()
    $(".sub--content__three").fadeOut()
    $(this).addClass("active")
    $(".sub-button2").removeClass("active")
    $(".sub-button3").removeClass("active")
})
$(".sub-button2").click(function(){
    $(".sub--content__one").fadeOut()
    $(".sub--content__two").fadeIn()
    $(".sub--content__three").fadeOut()
    $(this).addClass("active")
    $(".sub-button1").removeClass("active")
    $(".sub-button3").removeClass("active")
})
$(".sub-button3").click(function(){
    $(".sub--content__one").fadeOut()
    $(".sub--content__two").fadeOut()
    $(".sub--content__three").fadeIn()
    $(this).addClass("active")
    $(".sub-button1").removeClass("active")
    $(".sub-button2").removeClass("active")
})







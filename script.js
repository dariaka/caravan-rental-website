$(window).on("scroll", function () {
    var scrollValue = $(document).scrollTop();

    if (scrollValue <= $("#offer").offset().top - 100) {
        $(".navbtn").not(".toStart").removeClass("active");
        $(".toStart").addClass("active");
    } else if (scrollValue <= $("#galleries").offset().top - 100) {
        $(".navbtn").not(".toOffer").removeClass("active");
        $(".toOffer").addClass("active");
    } else if (scrollValue <= $("#faq").offset().top - 100) {
        $(".navbtn").not(".toGalleries").removeClass("active");
        $(".toGalleries").addClass("active");
    } else if (scrollValue <= $("#contact").offset().top - 200) {
        $(".navbtn").not(".toFaq").removeClass("active");
        $(".toFaq").addClass("active");
    } else {
        $(".navbtn").not(".toContact").removeClass("active");
        $(".toContact").addClass("active");
    }
});

$(".navbtn").on("click", function () {
    $(".navbtn").removeClass("active");
    $(this).addClass("active");

    if ($(".toStart").hasClass("active")) {
        $(document).scrollTop($("#start").offset().top);
    } else if ($(".toOffer").hasClass("active")) {
        $(document).scrollTop($("#offer").offset().top);
    } else if ($(".toGalleries").hasClass("active")) {
        $(document).scrollTop($("#galleries").offset().top);
    } else if ($(".toFaq").hasClass("active")) {
        $(document).scrollTop($("#faq").offset().top);
    } else {
        $(document).scrollTop($("#contact").offset().top);
    }
});
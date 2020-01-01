
$(function () {
    $(".box-hidden").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box-hidden:hidden").slice(0, 2).slideDown();
        if ($(".box-hidden:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 2500);
    });
});

// $('a[href=#top]').click(function () {
//     $('body,html').animate({
//         scrollTop: 0
//     }, 600);
//     return false;
// });

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $('.totop a').fadeIn();
//     } else {
//         $('.totop a').fadeOut();
//     }
// });
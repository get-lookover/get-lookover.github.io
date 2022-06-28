const doc = $(document).ready;
doc(function () {
    $("[disabled]").attr("href", "#!{Content_Disabled}");
    $('.navmenu').click(function () {
        $(this).siblings(".navbar-nav").slideToggle();
        
    });
    $('.close').click(function () {
        $(this).parent().fadeOut();
    });
    $('.close-slide').click(function () {
        $(this).parent().slideUp();
    });
    $(".accordion").click(function () {
        $(this).toggleClass("active");
        $(this).next(".panel").slideToggle("slow");
    });
    $(".tab-btns .tab").click(function () {
        var getID = $(this).attr("target-id");
        $(this).addClass("active").siblings().removeClass("active");
        $(".tabs .tab-content").hide();
        $("#" + getID).show();
    });
    if($("a").hasClass("[class*='btn-']")){
        $(this).css("display","inline-flex");
    }

    function navMatch(mediaQuery) {
        if (mediaQuery.matches) {
            $('.navbar-nav').hide();
        } else {
            $('.navbar-nav').show();
        }
    }
    var mediaQuery = window.matchMedia("(max-width: 800px)");
    navMatch(mediaQuery);
    mediaQuery.addListener(navMatch);
    $(".drop-link").on({
        click: function () {
            $(this).next(".dropdown-content").slideToggle();
            $(this).toggleClass("active");
            $(this).parentsUntil(".navbar-links").nextAll().children().children(".dropdown-content").slideUp();
            $(this).parentsUntil(".navbar-links").prevAll().children().children(".dropdown-content").slideUp();
            $(this).parent().nextAll().children(".dropdown-content").slideUp();
            $(this).parent().prevAll().children(".dropdown-content").slideUp();
        }
    });
});
$(document).on('mouseover', '.nav-link-cont', function () {
    $(this).children('.dropdown-menu').addClass('d-block')
})
$(document).on('mouseleave', '.nav-link-cont', function () {
    $(this).children('.dropdown-menu').removeClass('d-block')
})
$(document).on('mouseover', '.user-nav-cont', function () {
    $(this).children('.dropdown-menu').addClass('d-block')
})
$(document).on('mouseleave', '.user-nav-cont', function () {
    $(this).children('.dropdown-menu').removeClass('d-block')
})
$(document).on('click', "#menu-icon", function () {
    $(".nav-div").toggle();
    if ($(this).hasClass('fa-bars')) {
        $(this).css({
            "transform": "rotate(90deg)",
            "transition": "transform 0.5s ease"
        });
        setTimeout(function () {
            $("#menu-icon").removeClass("fa-bars").addClass("fa-xmark");
        }, 400);
    } else {
        $(this).css({
            "transform": "rotate(0deg)",
            "transition": "transform 0.5s ease"
        });
        setTimeout(function () {
            $("#menu-icon").addClass("fa-bars").removeClass("fa-xmark");
        }, 200);
    }
})
$(document).on('click', '.show-mob-nav-list', function () {
    if ($(this).parent().next().hasClass('d-none')) {
        $(this).children().removeClass('fa-chevron-down').addClass('fa-chevron-up')
    } else {
        $(this).children().removeClass('fa-chevron-up').addClass('fa-chevron-down')
    }
    $(this).parent().next().toggleClass('d-none')
})
$(document).ready(function () {
    var imgCount = $('.item-img-slider img').length;
    var imgWidth = $('.item-img-slider img').width();
    var visibleImages = 4;
    var slider = $('.item-img-slider');
    var prevBtn = $('.item-img-prev-btn');
    var nextBtn = $('.item-img-next-btn');

    slider.on('scroll', function () {
        var scrollLeft = $(this).scrollLeft();
        var maxScrollLeft = imgWidth * (imgCount - visibleImages);
        if (scrollLeft === 0) {
            slider.find(':before').css('visibility', 'visible');
            prevBtn.addClass('text-secondary');
        } else {
            slider.find(':before').css('visibility', 'hidden');
            prevBtn.removeClass('text-secondary');
        }
        if (scrollLeft >= maxScrollLeft) {
            slider.find(':after').css('visibility', 'visible');
            nextBtn.addClass('text-secondary');
        } else {
            slider.find(':after').css('visibility', 'hidden');
            nextBtn.removeClass('text-secondary');
        }
    });

    $('.item-img-prev-btn').click(function () {
        var scrollLeft = slider.scrollLeft();
        if (scrollLeft > 0) {
            slider.animate({ scrollLeft: '-=' + imgWidth }, 'slow');
        }
    });

    $('.item-img-next-btn').click(function () {
        var scrollLeft = slider.scrollLeft();
        var maxScrollLeft = imgWidth * (imgCount - visibleImages);
        if (scrollLeft < maxScrollLeft) {
            slider.animate({ scrollLeft: '+=' + imgWidth }, 'slow');
        }
    });
});
$(document).ready(function () {
    var revCount = $('.item-rev-slider .rev').length;
    var revWidth = $('.item-rev-slider .rev').width();
    var visibleImages = 4;
    var slider = $('.item-rev-slider');

    slider.on('scroll', function () {
        var scrollLeft = $(this).scrollLeft();
        var maxScrollLeft = revWidth * (revCount - visibleImages);
        if (scrollLeft === 0) {
            slider.find(':before').css('visibility', 'visible');
            prevBtn.addClass('text-secondary');
        } else {
            slider.find(':before').css('visibility', 'hidden');
            prevBtn.removeClass('text-secondary');
        }
        if (scrollLeft >= maxScrollLeft) {
            slider.find(':after').css('visibility', 'visible');
            nextBtn.addClass('text-secondary');
        } else {
            slider.find(':after').css('visibility', 'hidden');
            nextBtn.removeClass('text-secondary');
        }
    });
});

$(document).ready(function () {
    const contentPill = $('.content-pill');
    const main = $('main');

    if (contentPill.length) {
        const isLeft = $(contentPill).hasClass('position-absolute-left');
        const isRight = $(contentPill).hasClass('position-absolute-right');

        if (isLeft || isRight) {
            $(main).addClass('relative');
            $(contentPill).parent().addClass('container');
        }
    }
});

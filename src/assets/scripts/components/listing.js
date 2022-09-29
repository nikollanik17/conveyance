'use strict';

$(document).ready(function () {
    const categoriesPlaceholder = $('.categories__placeholder');

    if (categoriesPlaceholder.length > 0) {
        console.log('dnaiodnwoa');
        $(categoriesPlaceholder).click(function () {
            $(this).parent().toggleClass('active');
        });
    }
});

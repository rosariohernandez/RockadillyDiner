$(document).ready(function () {
    $('img').click(function (event) {
        $(this).next('span').slideToggle(300);
        event.stopPropagation();
    });
});
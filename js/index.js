$(function () {

    function modalShow(ele) {
        $('.mask').fadeIn();
        $(ele).fadeIn();
    }
    function modalHide(ele) {
        var $modal = $(ele).parents('.modal');
        $('.mask').fadeOut();
        $modal.fadeOut();
    }

    $('.modal-enter').on('touchend', function () {
        modalHide(this);
        window.location.href = 'index_02.html'
    });

    $('.yj-form-sub').on('touchend', function () {
        modalShow('.modal');
    });

});
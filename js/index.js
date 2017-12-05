$(function () {

    // 日期选择
    (function () {
        var currYear = (new Date()).getFullYear();
        var opt={};
        opt.date = {preset : 'date'};
        opt.datetime = {preset : 'datetime'};
        opt.time = {preset : 'time'};
        opt.default = {
            theme: 'android-ics light', //皮肤样式
            display: 'modal', //显示方式
            mode: 'scroller', //日期选择模式
            dateFormat: 'yyyy-mm-dd',
            lang: 'zh',
            showNow: true,
            nowText: "今天",
            startYear: currYear - 0, //开始年份
            endYear: currYear + 100, //结束年份
            minDate: new Date()
        };

        $("#selectDate").mobiscroll($.extend(opt['date'], opt['default']));
    })();

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
    });

    $('.yj-form-sub').on('touchend', function () {
        modalShow('.modal');
    });
});
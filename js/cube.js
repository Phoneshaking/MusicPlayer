$(function (){
    //主体翻转轮播图旋转功能
    var clientY = $(window).height();
    var selfY = $('.content-square').outerHeight();
    $(window).on('scroll',function () {
        //箭头消失
        $('.arrow img').fadeOut(1000);
        var scrollTop = $(window).scrollTop();
        var rate = (scrollTop/(selfY+120-clientY))*360;

        $('.cubebox').css({
            transform:'rotateX('+rate+'deg)'
        });

    });
    //设置播放按钮点击后消失
    var everyCube = $('.cubebox').children('.style');
    console.log(everyCube);
    everyCube.each(function () {
        var self = this;
        $(this).click(function () {
            console.log(this);
            $(self).find('.play-icon').slideUp();
        });

    })

});

$(function (){
    //主体翻转轮播图旋转功能
    var clientY = $(window).height();
    var clientX = $(window).width();
    var cubeBox = $('.cubebox');
    var selfY = $('.content-square').outerHeight();
    $(window).on('scroll',function () {
        //箭头消失
        $('.arrow img').fadeOut(1000);
        var scrollTop = $(window).scrollTop();
        var rate = (scrollTop/(selfY+200-clientY))*360;

        $('.cubebox').css({
            transform:'rotateX('+rate+'deg)'
        });

    });
    //设置播放按钮点击后消失
    var everyCube = cubeBox.children('.style');
    console.log(everyCube);
    everyCube.each(function () {
        var self = this;
        $(this).click(function () {
            console.log(this);
            $(self).find('.play-icon').slideUp();
        });

    });

    //设置cube宽高适配窗口
    const rateX = 1262/1880;
    const rateY = 709/922;

    $(window).resize(getcurrentsize());

    function getcurrentsize() {
        var currentclientY = $(window).height();
        var currentclientX = $(window).width();
        var currentWidth = (currentclientX-280)*rateX;
        var currentHeight = (currentclientY-280)*rateY;
        // currentWidth<=565 ? currentWidth=565 : currentWidth;
        // currentHeight<=317 ? currentHeight=317 : currentHeight;
        cubeBox.css({
            width:currentWidth,
            height:currentHeight
        });
        $.each($('.cubebox >div'),function (i) {
            $(this).css({
                transform: 'rotateX('+i*90+'deg) translateZ('+(currentclientY-280)*rateY/2+'px'
            });
            $('.content-square').css({
                marginTop:currentclientY/4
            })
        })
    }
    getcurrentsize();
});

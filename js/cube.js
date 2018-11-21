$(function (){
    //主体翻转轮播图旋转功能
    var clientY = $(window).height();
    console.log(clientY);
    var cubeBox = $('.cubebox');
    var selfY = $('body').height();

    var offsetTop = cubeBox.offset().top;
    $(window).on('scroll',function () {
        //箭头消失
        $('.arrow img').fadeOut(1000);

        var scrollTop = $(window).scrollTop();

        var rate = (scrollTop/(selfY-clientY))*360;
        cubeBox.css({
            transform:'rotateX('+rate+'deg)',
        });

        cubeBox.css({
            top:offsetTop+scrollTop
        })

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
    const rateX = 1280/1920;
    const rateL = 150/1333;

    $(window).resize(getcurrentsize);

    function getcurrentsize() {
        var currentclientX = $(window).width();
        var currentWidth = (currentclientX)*rateX;
        var currentHeight = currentWidth/1.77;
        currentWidth<=566 ? currentWidth=566 : currentWidth;
        currentWidth>=1162 ? currentWidth=1162 : currentWidth;
        currentHeight<=318? currentHeight = 318 :currentHeight;
        cubeBox.css({
            width:currentWidth,
            height:currentHeight
        });
        $('.cubebox').css({
            left:currentclientX*rateL+'px'
        });

        $.each($('.cubebox >div'),function (i) {
            $(this).css({
                transform: 'rotateX('+i*90+'deg) translateZ('+(currentHeight)/2+'px'
            });

        })
    }
    getcurrentsize();
});

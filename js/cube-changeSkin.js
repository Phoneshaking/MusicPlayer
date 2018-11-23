$(function (){
    //主体翻转轮播图旋转功能
    var cubeBoxSkin = $('.cubebox-changeSkin');
    var selfY = $('body').height();
    var clientY = $(window).height();
    $(window).on('scroll',function () {
        //箭头消失
        $('.arrow img').fadeOut(1000);

        var scrollTop = $(window).scrollTop();

        var rate = ((scrollTop)/(selfY-clientY))*360;

        cubeBoxSkin.css({
            transform:'rotateX('+rate+'deg)',
        });

    });

        var currentWidth = 150;
        var currentHeight = currentWidth/1.77;

        cubeBoxSkin.css({
            width:currentWidth,
            height:currentHeight
        });

        $.each($('.cubebox-changeSkin >div'),function (i) {
            $(this).css({
                transform: 'rotateX('+i*90+'deg) translateZ('+(currentHeight)/2+'px'
            });

        });
        cubeBoxSkin.find('div').each(function (i) {

            $(this).click(function (e) {
                e.stopPropagation();
                console.log(this);
                $($('.changeskin-box .m-pic').get(i)).fadeIn();

            })
        });
    $('.changeskin-box').click(function (e) {
        e.stopPropagation();
    })

});

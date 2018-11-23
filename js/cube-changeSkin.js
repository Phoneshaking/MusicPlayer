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
                var index = i;
                var picParent = $($('.changeskin-box .m-pic').get(i));
                var Pics = picParent.find('li img');
                console.log(Pics);

                Pics.each(function () {
                    $(this).click(function () {
                        console.log(this);
                        var Picsrc =  this.src;
                        console.log(Picsrc);
                        $('.cubebox-changeSkin>div').eq(index).css({
                            background:'url("'+Picsrc+'")  no-repeat center center',
                            backgroundSize:'cover'
                        });
                        $('.cubebox>div').eq(index).css({
                            background:'url("'+Picsrc+'")  no-repeat center center',
                            backgroundSize:'cover'
                        })


                    })
                });

                picParent.fadeToggle().siblings().fadeOut();


            })
        });
    $('.changeskin-box').click(function (e) {
        e.stopPropagation();
    })

});

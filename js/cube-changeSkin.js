$(function (){
    //主体翻转轮播图旋转功能
    var cubeBoxSkin = $('.cubebox-changeSkin');
    var selfY = $('body').height();
    var clientY = $(window).height();
    // var testLeft = 0
    // var Skinflag= false;
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
                // testLeft  = cubeBoxSkin.offset().left;
                // if (Skinflag) return
                e.stopPropagation();
                var index = i;
                var picParent = $($('.changeskin-box .m-pic').get(i));
                var Pics = picParent.find('li img');

                Pics.each(function () {
                    $(this).click(function () {
                        var Picsrc =  this.src;

                        $('.cubebox-changeSkin>div').eq(index).css({
                            background:'url("'+Picsrc+'")  no-repeat center center',
                            backgroundSize:'cover'
                        });
                        $('.cubebox>div').eq(index).css({
                            background:'url("'+Picsrc+'")  no-repeat center center',
                            backgroundSize:'cover'
                        }).find('.cube-mes .song-title').siblings().text('14期项目组加油鸭！')

                    })
                });

                picParent.fadeToggle().siblings().fadeOut();


            })
        });
    $('.changeskin-box').click(function (e) {
        e.stopPropagation();
    });
    //拖拽事件
    // var flag = false;
    // cubeBoxSkin.mousedown(function (event) {
    //     flag = false;
    //     var e = event || window.event;
    //     var clientX = e.clientX;
    //     var clientY = e.clientY;
    //     var currentTop = cubeBoxSkin.offset().top;
    //     var currentLeft = cubeBoxSkin.offset().left;
    //     var scrollY = $(document).scrollTop();
    //     var distanceY = clientY - currentTop;
    //     var distanceX = clientX - currentLeft;
    //
    //     console.log(scrollY);
    //     $(document).mousemove(function (event) {
    //         if (flag == true) return null;
    //         var e = event || window.event;
    //         var currentX = e.clientX;
    //         var currentY = e.clientY;
    //         cubeBoxSkin.css({
    //             top:currentY-distanceY-scrollY,
    //             left:currentX-distanceX
    //         });
    //         return false
    //     });
    //     return false
    // });
    // $(document).mouseup(function (e) {
    //     var currentTestLeft = cubeBoxSkin.offset().left;
    //     currentTestLeft!==testLeft? Skinflag = true : Skinflag = false;
    //     flag = true;
    //
    //     e.stopPropagation()
    // })
});
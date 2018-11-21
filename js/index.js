$(function () {
    //换肤功能
    var changeSkin = $('.sidebar #bgc');
    var obody = $('obody');
    changeSkin.click(function (e) {
        changeSkin.find('#bgcUl').fadeIn(1000);
        e.stopPropagation();
        console.log(1);
    });
    changeSkin.find('#bgcUl li').each(function () {
        $(this).click(function (e) {
            var ownColor = this.style.backgroundColor;
            obody.css({
                'backgroundColor':ownColor
            });
            e.stopPropagation();
        });

    });
    obody.click(function () {
        changeSkin.find('#bgcUl').fadeOut(1000)

    });


    //进页面时的效果
    var picTimer = setTimeout(function () {
        $('.large-pic').fadeOut(1000);
        $('.sidebar').delay(1000).fadeIn();
        $('.arrow img').delay(1000).animate({
            'opacity':1,
            'display':'block'
        })
    },1000);
//    隐藏与展示按钮,蒙版按钮
    $(".show-hidden").on("click",function () {
        $(".header-nav").slideToggle(500);
        $(".sidebar").slideToggle(500)
    });
    $(".mask").on("click",function () {
        $(".mask-D").css("display","block")
    })
    $(".mask-D").on("click",function () {
        $(".mask-D").css("display","none")
    })
    $(".bottom-btn-img").on("click",function (e) {
        $(".bottom-btn").slideToggle(500);
        e.stopPropagation();
    })
    $("#obody").on("click",function () {
        $(".bottom-btn").slideUp(500)
    })



});
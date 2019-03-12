$(function () {
    //换肤功能
    var changeSkin = $('#bgcUl');
    var origin = $('.origin');
    var obody = $('body');
    var currentTop = 0;
    var currentLeft = 0;
    var arrM =[];
    var hiddenflag = true;

    origin.click(function (e) {
        obody.css({
            'backgroundColor':'rgb(201,202,187)'
        });
        e.stopPropagation();

        $.each(changeSkin.find('li'),function (i) {
             currentTop = window.getComputedStyle(this).top;
             currentLeft = window.getComputedStyle(this).left;
             if (arrM.length<=3) arrM.push({top:currentTop,left:currentLeft});
             var inTop = arrM[i].top;
             var inLeft = arrM[i].left;

            if (!$(this).hasClass('.disn')){
            $(this).animate({
                top:0,
                left:0,
                opacity:0
            }).addClass('.disn');
            }else{
                console.log(currentTop);
                $(this).animate({
                    top:inTop,
                    left:inLeft,
                    opacity:1
                }).removeClass('.disn')
            }

    });
    changeSkin.click(function (e) {
        changeSkin.find('#bgcUl').stop().fadeIn(1000);

        });
        e.stopPropagation();
    });
    changeSkin.find('li').each(function () {
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
        });
    },1000);

    //小盒子动画
    var cube = setTimeout(function () {
        $(".cube-changeSkin").delay(2000).addClass("jump").css("opacity",1);
    },2000);

//    隐藏与展示按钮,蒙版按钮
    $(".show-hidden").on("click",function () {
        $(".header-nav").slideToggle(500);
        $(".sidebar").slideToggle(500);
        if (hiddenflag){
            $('.cubebox-changeSkin').css({
                opacity:0
            });
            hiddenflag = false
        }else {
            $('.cubebox-changeSkin').css({
                opacity:1
            });
            hiddenflag = true
        }


    });
    $(".mask").on("click",function () {
        $(".mask-D").fadeIn(1000)
    });
    $(".mask-D").on("click",function () {
        $(".mask-D").fadeOut(1000)
    });
    $(".bottom-btn-img").on("click",function (e) {
        $(".bottom-btn").slideToggle(500);
        e.stopPropagation();
    });
    $("#obody").on("click",function () {
        $(".bottom-btn").slideUp(500);
        $('.changeskin-box .m-pic').fadeOut();

    });
    var li = $(".m-pics ul li");
    $.each(li,function (i,ele) {
        $(ele).hover(function () {
           $(this).css({"animation":"hover1 0.5s","transform": "translate(4px,-4px)"
           })
        },function () {
            $(this).css({"animation":"hover2 0.5s","transform": "translate(0,0)"})
        })
    })

});


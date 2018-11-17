$(function () {
    //换肤功能
    var changeSkin = $('.sidebar #bgc');
    var obody = $('body');
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
<<<<<<< HEAD
    })
//侧栏弹出

     $(".sidebar").delay(3000).fadeIn(500);
=======
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

>>>>>>> df956493ef49b0d095cdee222a95d0ded6b7c1d3

});
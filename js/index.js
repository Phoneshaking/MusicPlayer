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
    })
//侧栏弹出

     $(".sidebar").delay(3000).fadeIn(500);

});
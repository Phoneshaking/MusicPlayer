$(function (){
    //主体翻转轮播图旋转功能
    var clientY = $(window).height();
    var cubeBox = $('.cubebox');
    var selfY = $('body').height();
    $(window).on('scroll',function () {
        //箭头消失
        $('.arrow img').fadeOut(1000);

        var scrollTop = $(window).scrollTop();

        var rate = ((scrollTop)/(selfY-clientY))*360;

        cubeBox.css({
            transform:'rotateX('+rate+'deg)',
        });

    });

    //设置播放按钮点击后消失
    // var x = document.getElementById("fry_audio1").paused;
    // var oAudio = document.getElementById("fry_audio1");
    // console.log(oAudio);
    var oAudios = $("audio");
    console.log(oAudios);
    // var Img = document.getElementsByClassName('play-icon');

    var everyCube = cubeBox.children('.style');
    everyCube.each(function (i) {
        console.log(i);
        var self = this;
        $(this).click(function () {
            console.log(this);
            // var Img = $(".play-icon");
            // console.log(Img);
            // $(self).find('.play-icon').slideUp();
            // console.log($(self).find('.play-icon img'));
            // console.log($(self).find('.play-icon img').attr('src'));
            var oSrc = $(self).find('.play-icon img').attr('src');
            console.log(oSrc);
            if (oSrc == 'images/play.png') {
                $(self).find('.play-icon img').attr('src','images/pause.png');
            }else{
                $(self).find('.play-icon img').attr('src','images/play.png');
            }

         if (oAudios[i].paused) {
             oAudios[i].play();
         }else{
             oAudios[i].pause()
         }
        });
    });
    //移入移出事件
    // $("cube").hover(function(){
    //     $(".play-icon").style.display=block;
    //     },function(){
    //     $(".play-icon").style.display=none;
    // });
    $(".cubebox").hover(function (){
        $(".play-icon").show();
    },function (){
        $(".play-icon").hide();
    })




    //设置cube宽高适配窗口
    const rateX = 920/1920;

    $(window).resize(getcurrentsize);

    function getcurrentsize() {
        var currentclientX = $(window).width();
        var currentWidth = (currentclientX)*rateX;
        var currentHeight = currentWidth/1.77;

        currentWidth<=443 ? currentWidth=443: currentWidth;
        // currentHeight<=318? currentHeight = 318 :currentHeight;

        cubeBox.css({
            width:currentWidth,
            height:currentHeight
        });

        $.each($('.cubebox >div'),function (i) {
            $(this).css({
                transform: 'rotateX('+i*90+'deg) translateZ('+(currentHeight)/2+'px'
            });

        })
    }
    getcurrentsize();
//多音频文件播放互斥功能
//     var audios = document.getElementsByTagName("audio");
//     // 暂停函数
//     function pauseAll() {
//         var self = this;
//         [].forEach.call(audios, function (i) {
//             // 将audios中其他的audio全部暂停
//             i !== self && i.pause();
//         })
//     }
//     // 给play事件绑定暂停函数
//     [].forEach.call(audios, function (i) {
//         i.addEventListener("play", pauseAll.bind(i));
//     })
//     var audios = document.getElementsByTagName("audio");
    // 暂停函数
    function pauseAll() {
        var self = this;
        [].forEach.call(oAudios, function (i) {
            // 将audios中其他的audio全部暂停
            i !== self && i.pause();
        })
    }
    // 给play事件绑定暂停函数
    [].forEach.call(oAudios, function (i) {
        i.addEventListener("play", pauseAll.bind(i));
    })
});

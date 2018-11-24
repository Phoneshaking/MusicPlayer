function setSrc(fileId,audioId,pId) {
    // var fp = $("#file1");
    var fp = $(fileId);
    var lg = fp[0].files.length;
    var items = fp[0].files;
    if (lg > 0) {
        for (var i = 0; i < lg; i++) {
            var fileName = items[i].name; // get file name
            var fileType = items[i].type;// get file type
        }
    }

    console.log(fileType);
    console.log(fileName);
    var strs= new Array(); //定义一数组
    strs=fileName.split("."); //字符分割
    console.log(strs);
    if(strs[strs.length-1] != 'mp3' && 'mav' && 'ogg') alert('请上传正确的音频文件');
    file_url ='source/'+fileName;
    console.log(file_url);
    // $('#fry_audio1').attr('src',file_url);
    $(audioId).attr('src',file_url);
    // $(pId).text(fileName);
    var tf = strs[strs.length-2];
    $(pId).text(tf);


}


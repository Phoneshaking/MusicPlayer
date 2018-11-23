function setSrc(fileId,audioId) {
    // var fp = $("#file1");
    var fp = $(fileId);
    var lg = fp[0].files.length;
    var items = fp[0].files;
    if (lg > 0) {
        for (var i = 0; i < lg; i++) {
            var fileName = items[i].name; // get file name
        }
    }
    console.log(fileName);
    file_url ='source/'+fileName;
    console.log(file_url);
    // $('#fry_audio1').attr('src',file_url);
    $(audioId).attr('src',file_url);

}


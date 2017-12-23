$(document).ready(function() {
    var requestData = function() {
        $.ajax({
            url: 'http://test-phpadmin.seer-global.cn/api/user/share/post',
            type: 'get',
            data: 'post_share_id=123',
            dataType: 'json',
            success: function(result) {
                if(result.code == 0) {
                    showData(result.data.statInfo);
                } else {
                    alert(result.msg);
                }
            }
        });
    };

    var showData = function(data) {
        $(".name").html(data.username);
        $(".assets").css("background-image", "url(" + data.avatar + ")");
        $(".audio").attr("src", data.mp3_file);

        var html = "";
        for(var i = 0, len = data.score; i < len; i++) {
            html += "<span class='star'></span>"
        }
        $(".stars").html(html);
        $(".play", ".assets").bind("click", function() {
            $(".audio")[0].play();
        });
    };

    requestData();
});
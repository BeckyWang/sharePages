$(document).ready(function() {

    function getQueryString(name) {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        const r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    var requestData = function() {
        $.ajax({
            url: 'http://test-phpadmin.seer-global.cn/api/user/share/newWordTest',
            type: 'get',
            data: 'sharekey=' + getQueryString('sharekey'),
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
        $('#rank').html('第' + data.rank + '名');
        $('#exceed_ratio').html('打败全国' + data.exceed_ratio + '的同学');
        $('#correct_ratio').html(data.correct_ratio);
        $('#test_time').html(data.test_time);
        $("#audio").attr("src", data.mp3_url);

        var percent = parseFloat(data.correct_ratio + "") / 100, 
            perimeter = Math.PI * 2 * 2.48;
        $(".ring circle").attr("stroke-dasharray", perimeter * percent + "rem " + perimeter * (1- percent) + "rem");

        $('#experience')
            .data("url", data.download_url)
            .on("click", function() {
                window.location.href = $(this).data("url");
            });

        $("#play").on("click", function() {
            if($("#audio")[0].paused) {
                $("#audio")[0].play();
                $("#play").attr("src", "../image/suspend.png");
                return;
            }
            $("#audio")[0].pause();
            $("#play").attr("src", "../image/play_on.png");
        });
    };

    requestData();
});
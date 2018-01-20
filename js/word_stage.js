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
			url: 'http://test-phpadmin.seer-global.cn/api/user/share/wordStage',
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
		$('.money').html('+' + data.coin);
		$('.exp').html('+' + data.score);
		$('.time').html(data.cost_time);
		$('.per').html(data.exceed);
		$('.right').html(data.correct_count);
		$('.total').html(data.total_count);
	};

	requestData();
});
$(document).ready(function() {
	var requestData = function() {
		$.ajax({
			url: 'http://test-phpadmin.seer-global.cn/api/user/share/wordStage',
			type: 'get',
			data: 'stage_share_id=123&sharekey=9f996c0f83616ae5435bd9acdfbea0ac',
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
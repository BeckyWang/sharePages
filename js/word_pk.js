$(document).ready(function() {
	var requestData = function() {
		$.ajax({
			url: 'http://test-phpadmin.seer-global.cn/api/user/share/wordPk',
			type: 'get',
			data: 'pk_share_id=123',
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
		$('.me-name').html(data.user_one.name);
		$('.me-score').html(data.user_one.correct_count);
		
		$('.opponent-name').html(data.user_two.name);
		$('.opponent-score').html(data.user_two.correct_count);

		$('.money').html('+' + data.coin);
		$('.exp').html('+' + data.score);
	};

	requestData();
});
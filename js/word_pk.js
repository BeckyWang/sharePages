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
		$('.avatar', '.me-head-img').attr('src', data.user_one.avatar);

		$('.opponent-name').html(data.user_two.name);
		$('.opponent-score').html(data.user_two.correct_count);
		$('.avatar', '.opponent-head-img').attr('src', data.user_two.avatar);

		$('.money').html('+' + data.coin);
		$('.exp').html('+' + data.score);
	};

	requestData();
});
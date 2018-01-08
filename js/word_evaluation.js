$(document).ready(function() {
	var clientHeight = document.documentElement.clientHeight;

	var requestData = function() {
		$.ajax({
			url: 'http://test-phpadmin.seer-global.cn/api/user/share/wordAbility',
			type: 'get',
			data: 'test_id=123&sharekey=9f996c0f83616ae5435bd9acdfbea0ac',
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
		$('.time').html(data.cost_time + 's');
		$('.per').html(data.correct_ratio);

		data.rank_list.forEach(function(val) {
			var ulHtml = '<ul class="table-body-item">' +
				'<li style="width: 15%;"' + (val.order < 4 && 'class="font-color"') + '>' + val.order + '</li>' +
				'<li style="width: 24%;">' + val.username + '</li>' +
				'<li style="width: 33%;">' + val.cost_time + '</li>' +
				'<li style="width: 28%;">' + val.correct_ratio + '</li>' +
			'</ul>';
			$('.table-body').append(ulHtml);
		});
	};

	(function init() {
		$('.table-body').css('height', (clientHeight - 245) + 'px');
		$('.table-body').css('overflow', 'auto');
		requestData();
	})();
});
$(document).ready(function() {
	var requestData = function() {
		$.ajax({
			url: 'http://test-phpadmin.seer-global.cn/api/user/share/lessonTest',
			type: 'get',
			data: 'lesson_test_id=123',
			dataType: 'json',
			success: function(result) {
				if(result.code == 0) {
					showData(result.data.statInfo);
				} else {
					alert(result.msg)
				}
			}
		});
	};

	var showData = function(data) {
		var headNode = $(".my-grade");
		$(".money", headNode).html(data.coin);
		$(".exp", headNode).html(data.score);
		$(".time", headNode).html(data.cost_time);
		$(".per", headNode).html(data.correct_ratio);

		var list = data.rank_detail;
		$(".list").html(list.map(function(item) {
			var result = item.red_list.reduce(function(rst, red) {
				return rst.replace(red, "<span class='red'>" + red + "</span>");
			}, item.line);
			return "<li>" + result + "</li>"
		}));
	};

	(function init() {
		var clientHeight = document.documentElement.clientHeight;
		$('.list').css('height', (clientHeight - 240) + 'px');
		$('.list').css('overflow', 'auto');
		requestData();
	})();
});
$(document).ready(function() {
	var requestData = function() {
		$.ajax({
			url: 'http://test-phpadmin.seer-global.cn/api/user/share/wordAbility',
			type: 'get',
			data: 'test_id=123',
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

	};

	requestData();
});
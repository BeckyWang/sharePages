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
            url: 'http://test-phpadmin.seer-global.cn/api/user/share/signcard',
            type: 'get',
            data: 'sharekey=' + getQueryString('sharekey'),
            dataType: 'json',
            success: function(result) {
                if (result.code == 0) {
                    showData(result.data.statInfo);
                } else {
                    alert(result.msg);
                }
            }
        });
    };

    var showData = function(data) {
        $("p", ".calendar").html("<span class='green'>" + data.left_day + "</span>/" + data.total_day);
        $(".red", ".say").html(data.total_day - data.left_day + "天");

        var option = {
            grid: {
                top: 10,
                bottom: 50,
                right: 14
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: "#0ec682"
                    }
                },
                data: data.count_list.map(function(d) {
                    return d.day
                }),
                axisLabel: {
                    interval: 0,
                    color: "#3e3e3e"
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        type: 'dotted'
                    }
                },
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: "#86e1c0"
                    }
                },
                interval: 50,
                axisLabel: {
                    color: "#3e3e3e"
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#eee',
                        type: 'dotted'
                    }
                }
            },
            series: [{
                type: 'line',
                smooth: true,
                data: data.count_list.map(function(d) {
                    return d.day_count
                }),
                symbol: 'circle',
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: "#ffd035"
                    }
                },
                lineStyle: {
                    normal: {
                        color: "#12ca87"
                    }
                }
            }]
        };

        $(".chart").css("width", Math.max(32 * data.count_list.length, document.documentElement.clientWidth) + "px");
        echarts.init($(".chart")[0]).setOption(option);
    };

    $('.body').css('height', (document.documentElement.clientHeight - 260) + 'px');
    requestData();
});
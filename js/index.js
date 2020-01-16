var myChart_pictorialBar = echarts.init(document.getElementById("pictorialBar"));
var myData = ['刑事', '治安', '交通', '求助', '纠纷']
var lineData = [100, 100, 100, 100, 100]
var lastYearData = {
    1: [3, 20, 62, 34, 55, 65, 33]
}
var thisYearData = {
    1: [11, 38, 23, 39, 66]
}
var timeLineData = [1]
var background = "transparent"; //背景 

var option_pictorial = {
    baseOption: {
        backgroundColor: background,
        timeline: {
            show: false,
            top: 0,
            data: []
        },
        legend : {
            top : '5%',
            left : '31%',
            show : false,
            itemWidth : 22,
            itemHeight : 22,
            itemGap: 343,
            icon : 'horizontal',
            textStyle : {
                color : '#ffffff',
                fontSize : 14,
            },
            data: ['2017', '2018']
        },
        grid: [{
            show: false,
            left: '5%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '37%'
        }, {
            show: false,
            left: '51%',
            top: '10%',
            bottom: '8%',
            width: '0%'
        }, {
            show: false,
            right: '2%',
            top: '10%',
            bottom: '8%',
            containLabel: true,
            width: '37%'
        }],
        xAxis: [{
            type: 'value',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }, {
            gridIndex: 1,
            show: false
        }, {
            gridIndex: 2,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            position: 'top',
            axisLabel: {
                show: false
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            data: myData
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 14
                }

            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center'
                    }
                }
            })
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false

            },
            data: myData
        }],
        series: []

    },
    options: []
}

option_pictorial.baseOption.timeline.data.push(timeLineData[0])
option_pictorial.options.push({
    series: [
    {
        type: 'pictorialBar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: 'rgba(3,147,114,0.27)'
            }
        },
        barWidth: 10,
        symbolRepeat: true,
        symbolSize: 0,
        data: lineData,
        barGap: '-100%',
        barCategoryGap: 0,
        // label: {
        //     normal: {
        //         show: true,
        //         formatter: (series) => {
        //             return lastYearData[timeLineData[0]][series.dataIndex] + '%'
        //         },
        //         position: 'insideTopLeft',
        //         textStyle:{
        //             color: '#ffffff',
        //             fontSize: 14,
        //         },
        //         offset: [0, -35],
        //     }
        // },
        z: -100,
            animationEasing: 'elasticOut',
             animationDelay: function (dataIndex, params) {
            return params.index * 30;
        }
    }, {
        name: '2017',
        type: 'pictorialBar',
        xAxisIndex: 0,
        yAxisIndex: 0,
        symbol: 'rect',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: '#039372'
            }
        },
        symbolRepeat: true,
        symbolSize: 14,
        // data: lastYearData[timeLineData[0]],
        animationEasing: 'elasticOut',
        animationDelay: function (dataIndex, params) {
            return params.index * 30 * 1.1;
        }
    },
    {
        type: 'pictorialBar',
        xAxisIndex: 2,
        yAxisIndex: 2,
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: 'rgba(54,215,182,0.27)'
            }
        },
        barWidth: 10,
        symbolRepeat: true,
        symbolSize: 14,
        data: lineData,
        barGap: '-100%',
        barCategoryGap: 0,
        label: {
            normal: {
                show: true,
                formatter: (series) => {
                    return thisYearData[timeLineData[0]][series.dataIndex] + '%'
                },
                position: 'insideTopRight',
                textStyle:{
                    color: '#ffffff',
                    fontSize: 14,
                },
                offset: [0, -25],
            }
        },
        z: -100,
            animationEasing: 'elasticOut',
             animationDelay: function (dataIndex, params) {
            return params.index * 30;
        }
    }, {
        name: '2018',
        type: 'pictorialBar',
        xAxisIndex: 2,
        yAxisIndex: 2,
        symbol: 'rect',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: '#36d7b6'
            }
        },
        symbolRepeat: true,
        symbolSize: 14,
        data: thisYearData[timeLineData[0]],
        animationEasing: 'elasticOut',
        animationDelay: function (dataIndex, params) {
            return params.index * 30 * 1.1;
        }
    }
    ]
});
myChart_pictorialBar.setOption(option_pictorial)



// radar
var myChart_radar = echarts.init(document.getElementById("radar"))
option_radar = {
    backgroundColor:'black',
    "normal": {
        "top": 200,
        "left": 300,
        "width": 500,
        "height": 400,
        "zIndex": 6,
        "backgroundColor": ""
    },
    "color": ["rgba(245, 166, 35, 1)", "rgba(19, 173, 255, 1)"],
    "title": {
        "show": true,
        "text": "基础雷达图",
        "left": "40%",
        "top": "1%",
        "textStyle": {
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
        }
    },
    "tooltip": {
        "show": true,
        "trigger": "item"
    },
    "legend": {
        "show": true,
        "icon": "circle",
        "left": "35%",
        "top": "90%",
        "orient": "horizontal",
        "textStyle": {
            "fontSize": 14,
            "color": "#fff"
        },
        "data": ["今日警情", "昨日警情"]
    },
    "radar": {
        "center": ["50%", "50%"],
        "radius": "70%",
        "startAngle": 90,
        "splitNumber": 4,
        "shape": "circle",
        "splitArea": {
            "areaStyle": {
                "color": ["transparent"]
            }
        },
        "axisLabel": {
            "show": false,
            "fontSize": 18,
            "color": "#fff",
            "fontStyle": "normal",
            "fontWeight": "normal"
        },
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "grey"//
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "grey"//
            }
        },
        "indicator": [{
            "name": "道路结冰",
            "max": 88
        }, {
            "name": "暴雪",
            "max": 88
        }, {
            "name": "暴雨",
            "max": 88
        }, {
            "name": "冰雹",
            "max": 88
        }, {
            "name": "大风",
            "max": 88
        }, {
            "name": "大雾",
            "max": 88
        }, {
            "name": "高温",
            "max": 88
        }, {
            "name": "干旱",
            "max": 88
        }, {
            "name": "寒潮",
            "max": 88
        }, {
            "name": "雷电",
            "max": 88
        }, {
            "name": "霾",
            "max": 88
        }, {
            "name": "沙尘暴",
            "max": 88
        }, {
            "name": "霜冻",
            "max": 88
        }, {
            "name": "台风",
            "max": 88
        }, {
            "name": "洪水",
            "max": 88
        }]
    },
    "series": [{
        "name": "今日警情",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "areaStyle": {
            "normal": {
                "color": "rgba(245, 166, 35, 0.4)"
            }
        },
        itemStyle:{
            color:'rgba(245, 166, 35, 1)',
            borderColor:'rgba(245, 166, 35, 0.3)',
            borderWidth:10,
        },
        "lineStyle": {
            "normal": {
                "type": "dashed",
                
                "color": "rgba(245, 166, 35, 1)",
                "width": 2
            }
        },
        "data": [
            [80, 50, 55, 80, 50, 80, 48, 43, 60, 78, 60, 40, 42, 44, 65]
        ]
    }, {
        "name": "昨日警情",
        "type": "radar",
        "symbol": "circle",
        "symbolSize": 10,
        "itemStyle": {
            "normal": {
                color:'rgba(19, 173, 255, 1)',
                "borderColor": "rgba(19, 173, 255, 0.4)",
                "borderWidth": 10
            }
        },
        "areaStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 0.5)"
            }
        },
        "lineStyle": {
            "normal": {
                "color": "rgba(19, 173, 255, 1)",
                "width": 2,
                "type": "dashed"
            }
        },
        "data": [
            [60, 60, 65, 60, 70, 40, 80, 63, 68, 60, 77, 60, 80, 62, 80]
        ]
    }]
};
myChart_radar.setOption(option_radar)

// cake

var myCharts_cake = echarts.init(document.getElementById("cake"))
var scaleData = [{
        'name': '工程建设',
        'value': 10
    },
    {
        'name': '产权交易',
        'value': 10
    },
    {
        'name': '土地交易',
        'value': 10
    },
    {
        'name': '其他交易',
        'value': 10
    },
    {
        'name': '土地交易',
        'value': 10
    },
    {
        'name': '其他交易',
        'value': 10
    },
  
];
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 4,
                shadowBlur: 200,
                borderColor:color[i],
                shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [50, 100],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                        total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return params.name + '\n{white|' + '占比' + percent + '%}';
                    }else {
                        return '';
                    }
                },
                rich: rich
            },
            labelLine: {
                length:15,
                length2:50,
                show: true,
                color:'#00ffff'
            }
        }
    },
    data: data
}];
option_cake = {
    backgroundColor: '#04243E',
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}
myCharts_cake.setOption(option_cake)

// linear(last one)

var myChart_linear = echarts.init(document.getElementById("linear"))
// Generate data
var category = [];
var dottedBase = +new Date();
var lineData = [];
var barData = [];

for (var i = 0; i < 20; i++) {
    var date = new Date(dottedBase += 1000 * 3600 * 24);
    category.push([
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate()
    ].join('-'));
    var b = Math.random() * 200;
    var d = Math.random() * 200;
    barData.push(b)
    lineData.push(d + b);
}


// option
option_linear = {
    backgroundColor: '#0f375f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#333'
            }
        }
    },
    legend: {
        data: ['line', 'bar'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: 'line',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
    }, {
        name: 'bar',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#14c8d4'},
                        {offset: 1, color: '#43eec6'}
                    ]
                )
            }
        },
        data: barData
    }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#0f375f'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};
myChart_linear.setOption(option_linear)
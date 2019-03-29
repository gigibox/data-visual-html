function drawRankList (divID, month, worker, business) {
  const barChart = echarts.init(document.getElementById(divID), null, {

  })
  barChart.clear()
  const option = {
    animationDuration: 3000,
    color: [new echarts.graphic.LinearGradient(
      0, 0, 0, 1, [{
        offset: 0,
        color: '#00FFA8'
      },
      {
        offset: 0.9,
        color: 'rgba(212,197,43,0)'
      },
      {
        offset: 1,
        color: 'rgba(0,246,255,0.5)'
      }
      ]
    ), new echarts.graphic.LinearGradient(
      0, 0, 0, 1, [{
        offset: 0,
        color: '#00F9FF'
      },
      {
        offset: 0.9,
        color: 'rgba(102,205,170,0)'
      },
      {
        offset: 1,
        color: 'rgba(0,249,255,0.5)'
      }
      ]
    )],

    title: [{
      text: '台资企业排行',
      top: '2%',
      left: '37%',
      textStyle: {
        color: '#00FFA8',
        fontStyle: 'normal',
        // fontFamily:'sans-serif',
        fontSize: 18
      },
      textAlign: 'right',
      subtext: month,
      subtextStyle: {
        align: 'center'
      }
    }, {
      text: '台胞工作排行',
      right: '21%',
      top: '2%',
      textStyle: {
        color: '#00F9FF',
        fontStyle: 'normal',
        // fontFamily:'sans-serif',
        fontSize: 18
      },
      subtext: month
    }],
    grid: [{
      left: '-2%',
      bottom: '1%',
      width: 350,
      height: 550,
      containLabel: true
    }, {
      right: '-1',
      bottom: '1%',
      width: 350,
      height: 550,
      containLabel: true
    }],
    xAxis: [
      {
        type: 'value',
        inverse: true,
        boundaryGap: [0, 0.01],
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        }
      },
      {
        gridIndex: 1,
        type: 'value',
        boundaryGap: [0, 0.01],
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        axisLine: {
          show: false
        }
      }],
    yAxis: [{
      type: 'category',
      position: 'right',
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        padding: [0, 8, 13, 0],
        verticalAlign: 'bottom',
        textStyle: {
          fontSize: 15,
          color: '#ffffff',
          align: 'right'
        }
      },
      axisLine: {
        show: false
      },
      data: worker
    }, {
      gridIndex: 1,
      type: 'category',
      position: 'left',
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        padding: [0, 5, 13, 8],
        verticalAlign: 'bottom',
        textStyle: {
          fontSize: 15,
          color: '#ffffff',
          align: 'left'
        }
      },
      axisLine: {
        show: false
      },
      data: business
    }],
    series: [{
      type: 'bar',
      data: [3, 4, 5, 6, 7, 8, 9, 10],
      barWidth: 18,
      itemStyle: {
        normal: {
          borderWidth: 1,
          borderColor: '#00FFA8'
        }
      }
    }, {
      xAxisIndex: 1,
      yAxisIndex: 1,
      type: 'bar',
      data: [3, 4, 5, 6, 7, 8, 9, 10],
      barWidth: 18,
      itemStyle: {
        normal: {
          borderWidth: 1,
          borderColor: '#00F9FF'
        }
      }
    }]
  }

  barChart.setOption(option)
}

const worker = ['服务员', '工人', '企业主', '程序员', '广告制作人', '教师', '摄影师', '医生']
const business = ['大润发', '统一银座', '界龙科技', '联暻半导体', '海湾电子', '顶津食品', '大统纺织', '连盛实业']

drawRankList('rank-chart', '2019.02', business, worker)

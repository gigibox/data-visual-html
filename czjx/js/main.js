// const api = 'http://192.168.159.2:7300/mock/5c88c1401cbd339a508e7ef4/czjx'
const api = 'http://210.12.56.58:18003/api/open/evaluation/evaluations'

var G_RESPONSE_DATA = []

const tasks = []

var SEQNUMBER = 0

const TIMEOUT = 10 * 1000

var coords = [
  {
    unit: '财政局',
    x: 510,
    y: 360
  },
  {
    unit: '工信委',
    x: 1000,
    y: 400
  },
  {
    unit: '环保局',
    x: 1300,
    y: 310
  },
  {
    unit: '教育局',
    x: 550,
    y: 650
  },
  {
    unit: '水利局',
    x: 230,
    y: 850
  },
  {
    unit: '民政局',
    x: 900,
    y: 630
  },
  {
    unit: '住建局',
    x: 1230,
    y: 600
  },
  {
    unit: '人社局',
    x: 700,
    y: 900
  },
  {
    unit: '商务局',
    x: 1100,
    y: 900
  },
  {
    unit: '科技局',
    x: 1400,
    y: 850
  }
]

function bar (divID, data) {
  var barchart = echarts.init(document.getElementById(divID), null, {

  })
  barchart.clear()
  var option = {
    color: ['#02ffff'],
    animationDuration: 3000,
    grid: {
      left: 5,
      right: 30,
      top: 0,
      bottom: -30
    },
    yAxis: {
      show: false,
      data: ['reindeer']
    },
    xAxis: {
      show: false,
      max: 100
    },
    series: [{
      type: 'pictorialBar',
      label: {
        normal: {
          show: false
        }
      },
      symbolRepeat: true,
      symbolSize: ['15%', '60%'], // 电量格宽度
      barCategoryGap: '40%',
      symbolMargin: 3,
      data: [{
        value: data,
        symbol: 'path://M5 10 H 900 V 1 H 10 L 10 10',
        animationDelay: function (dataIndex, params) {
          return params.index * 30
        }
      }]
    }]
  }
  barchart.setOption(option)
}

function isFloat (n) {
	return n===+n && n!==(n|0);
}

const creatTask = (obj, i, seq) => new Promise(resolve => {
  setTimeout(() => {	  
	// console.log('task: ' , i ,'seq: ', seq,  new Date())
    if (seq != SEQNUMBER) {
      return
    }
	
	const investment = obj.scores.investment ? obj.scores.investment : 0
	const output = obj.scores.output ? obj.scores.output : 0
	const evaluation = obj.scores.evaluation ? obj.scores.evaluation : 0
	const ability = obj.scores.ability ? obj.scores.ability : 0
	const plus_minus = obj.scores.plus_minus ? obj.scores.plus_minus : 0
	
    let count = investment + output + evaluation + ability + plus_minus
	
	if (isFloat(count)) {
		count = count.toFixed(2)
	}
	if (count === 0 ) {
		return
	}
	
	drawHistogram(obj.unit)
	
    $('#t_score thead tr th:nth-child(1)').html(obj.unit)
    $('#t_score thead tr th:nth-child(2)').html(count + ' 分')
    bar('progress_bar', count)

    $('#t_score tbody tr:eq(0) td:nth-child(2)').html(investment + ' 分')
    $('#t_score tbody tr:eq(1) td:nth-child(2)').html(output + ' 分')
    $('#t_score tbody tr:eq(2) td:nth-child(2)').html(ability + ' 分')
    $('#t_score tbody tr:eq(3) td:nth-child(2)').html(evaluation + ' 分')
    $('#t_score tbody tr:eq(4) td:nth-child(2)').html(plus_minus + ' 分')

    resolve()

    // console.log(new Date(), i)
  }, TIMEOUT * i)
})

function renderData (seq) {
  let i = 0
  G_RESPONSE_DATA.forEach(obj => {
	const investment = obj.scores.investment ? obj.scores.investment : 0
	const output = obj.scores.output ? obj.scores.output : 0
	const evaluation = obj.scores.evaluation ? obj.scores.evaluation : 0
	const ability = obj.scores.ability ? obj.scores.ability : 0
	const plus_minus = obj.scores.plus_minus ? obj.scores.plus_minus : 0
	
	// 总分为0的单位不在分数板显示
    let count = investment + output + evaluation + ability + plus_minus
	if (count !== 0 ) {
		tasks.push(creatTask(obj, i, seq))
		i++
	}	

  })

	// console.log('push task: ', i, 'seq: ', seq, 'tasks lenght', tasks.length)
  Promise.all(tasks).then(() => {
    tasks.splice(0, tasks.length)
    setTimeout(() => {
      renderData(seq)
    }, TIMEOUT)
  })
}

function drawHistogram (unit) {
  c.height = c.height
  coords.forEach((value, index) => {
    // let data = G_RESPONSE_DATA.find(v => { if (v.unit === value.unit) return v })
    let data = G_RESPONSE_DATA[index]
    let chart = new pillarcontainer(value.x, value.y,
      (data && data.scores && data.scores.plus_minus) ? data.scores.plus_minus : 0,
      (data && data.scores && data.scores.evaluation) ? data.scores.evaluation : 0,
      (data && data.scores && data.scores.ability) ? data.scores.ability : 0,
      (data && data.scores && data.scores.output) ? data.scores.output : 0,
      (data && data.scores && data.scores.investment) ? data.scores.investment : 0,
      data.unit)

	if (data.unit === unit) {
		chart.setSelect(true)
	}
    chart.draw()
  })
}

function getData () {
  $.getJSON(api, rsp => {
    if (rsp.code === 0) {
      G_RESPONSE_DATA = rsp.data.unit_list

	  tasks.splice(0, tasks.length)
      renderData(++SEQNUMBER)
	  
// console.log('ajax: ',SEQNUMBER, " ", new Date())
    }
  })
  setTimeout('getData()', 5 * 60 * 1000)
}

$(function () {
  getData()
})

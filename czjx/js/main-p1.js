//气泡
$(function(){
    const canvas = document.querySelector('canvas');
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    let circles = [], images=[];
    let imgWidth, imgHeight;

    const getRandomColor = function() {
        const colors= ['#234C6C', '#398DA7', '#84CBDD'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const Circle = function() {
        this.r = Math.random()*25 +10;
        this.pen = Math.random();
        this.x = Math.random()*(window.innerWidth - this.r * 2) + this.r;
        this.y = Math.random()*(window.innerHeight - this.r * 2) + this.r;

        this.dy = -1;
        this.dx = (Math.random() - 0.5) * 2;
        this.color = `rgba(132,203,221,0.5)`;
    }

    Circle.prototype.draw = function () {
        var cir = new Image();
        cir.src = 'img/pao.png';
        var cirWidth = 42;
        ctx.drawImage(cir, this.x, this.y ,cirWidth*this.pen, cirWidth*this.pen);
        // ctx.beginPath();
        // ctx.arc(this.x,this.y,this.r,0, Math.PI * 2,true);
        // //ctx.stroke();
        // ctx.fillStyle=this.color;
        //
        // ctx.fill();
    }

    Circle.prototype.update = function () {
        this.y = this.y < 0 ? height : this.y +this.dy;
        this.x = this.x > window.innerWidth	? this.r: this.x+this.dx;

    }

    const animate = function() {
        requestAnimationFrame(animate);
        ctx.clearRect(0,0,window.innerWidth, window.innerHeight);

        circles.map(c=>{
            c.update();
            c.draw();
        })

    }

    circles = Array(12).fill(0).map(x => new Circle());
    animate();
})

//排序
function sortValue(a,b){
    return b.value - a.value;
}

// const api = 'http://192.168.159.2:7300/mock/5c88c1401cbd339a508e7ef4/czjx'
const api = 'http://210.12.56.58:18003/api/open/evaluation/evaluations'

//数据请求
function requestData(){
    $.ajax({
        url: api,
        type: 'GET',
        success: function(res){
            let data = res.data.unit_list;
            let arrData = [];
            let dataX = [];
            let dataY = [];
            for(let i in data){
                arrData.push({name: data[i].unit,value: data[i].schedule})
            }
            for(let i in arrData){
                dataX.push(arrData[i].name);
                dataY.push(arrData[i].value)
            }
            leftRender(dataX,arrData);
            rightRender(arrData);
            middleRender(dataX,dataY);



        }
    })
}

//左侧
function leftRender(dataX,arrData){
    let legendData = dataX;
    let seriesData = [];
    for(let i in arrData){
        let serItem = {};
        serItem.type = 'bar';
        serItem.data = [];
        for(let j in arrData){
            if(j == i){
                let rValue = arrData[j].value;
                serItem.data[j] = rValue
            }else{
                serItem.data[j] = 0;
            }
        }
        serItem.coordinateSystem = 'polar';
        serItem.name = dataX[i];
        serItem.stack = 'a';
        seriesData[i] = serItem;
    }

    let leftechartOption = {
        angleAxis: {
            type: 'category',
            z: 1,
            axisLine: {
                show: false
            }
        },
        color:['#fc8700','#ff00c0', '#f8c73c', '#c7ef7c', '#f33a00', '#acbdff', '#60ced3', '#2cbdff', '#FFFF37', '#E8FFC4'],
        radiusAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false
            },
            // max: function(value) {
            //     if (value.max < 10)
            //         return value.max-1;
            //     else if (value.max < 20)
            //         return value.max-2;
            //     else if (value.max < 30)
            //         return value.max-3;
            //     else
            //         return value.max-4;
            // },
            max: function(value){
                return Math.floor(value.max/1.2)
            },
            splitLine: {
                show: true,
                interval: 0,
                lineStyle: {
                    interval: 1,
                    color: '#3c4084'
                }
            },
            splitNumber:5,
            splitArea: {
                show: false
            }
        },
        polar: {
            center: ['50%', '35%'],
            radius: '60%'
        },
        series: seriesData,
        legend: {
            left: '40%',
            top: '70%',
            bottom: 0,
            width: '60%',
            height:'100',
			itemHeight: 9,
			itemWidth: 16,
			borderRadius: 10,
            textStyle:{
                color:'#fff'
            },
            data: legendData,
			icon: 'rect'
        }
    };
    let leftChart = echarts.init(document.getElementById('left-echart'));
    leftChart.setOption(leftechartOption);
}

//右侧
function rightRender(data){
    let newJSONStr = JSON.stringify(data);
    let newJSON = JSON.parse(newJSONStr);
    newJSON.sort(sortValue);
    let rightData = newJSON.slice(0,6);
    $('#table').empty();
    for(let i in rightData){
        let row = '<div class="item"><div class="col col1"><img src="img/icon-'+ (parseInt(i)+1) +'.png"></div><div class="col col2">'+ rightData[i].name +'</div><div class="col col3">'+ rightData[i].value +'%</div></div>';
        $('#table').append(row)
    }

}

//中间
function middleRender(dataX,dataY){
    let middleOption = {
        color: ['#3398DB'],
        title: {
            text: '各部门数据上报进度',
            left: 30,
            button: 80,
            padding:[20,0,30,-10],
            textStyle:{
                color: '#fff',
                fontWeight:'normal'
            },
            fontStyle: {
                fontSize:'40px'
            },
        },
        tooltip : {
            //trigger: 'axis',
            // axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            //    type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            // }
        },
        grid: {
            left: '2%',
            right: '5%',
            top:'28%',
            bottom: '4%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                name : '部门',
                nameTextStyle:{//横轴提示
                    padding:[24,30,0,-15],
                    fontSize:'14',
                    color:'#fff'
                },
                axisLabel : {
                    color:'#fff',//横坐标文字颜色
                    fontSize:'14',
                    padding:[10,0,0,0]
                },
                axisLine: {
                    show: false,
                },
                data: dataX,
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : '百分比',
                nameLocation:'end',
                nameTextStyle:{//竖轴提示设置
                    padding:[0,0,20,-50],
                    fontSize:'14',
                    color:'#fff'
                },
                min: 0,
                max: 100,
                splitNumber: 5,
                axisLabel: {
                    //设置y轴数值为%
                    formatter: '{value} %',
                    textStyle: {
                        color: '#fff',//竖轴文字颜色,
                        fontSize:'14'
                    },
                },
                splitLine:{
                    show:true,
                    lineStyle:{
                        type:'solid',
                        // color:'rgba(26,39,155,0.3)'
                        color:'#3c4084'
                    }
                } ,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series : [
            {
                // name:'进度百分比',
                type:'bar',
                barWidth: '40%',
                center : ['50%', '50%'],
                barGap: 20,
                itemStyle: {
                    normal: {
                        barBorderRadius: [8, 8, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#535AFC'},
                                {offset: 0.5, color: '#3237F6'},
                                {offset: 1, color: '#2E34F5'}
                            ]
                        ),
                        opacity: 0.85
                    }
                },
                data: dataY
            }
        ]
    };
    let middleChart = echarts.init(document.getElementById('middle-echart'));
    middleChart.setOption(middleOption);
}

$(function(){
    requestData();
    setInterval('requestData()',5000);
})

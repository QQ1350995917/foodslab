/**
 * Created by dingpengwei on 7/15/16.
 */

function ChartItem(name, color, data) {
    this.name = name;
    this.color = color;
    this.data = data;
}

function Chart() {
    this.id = "this is the id";
    this.year = 2016;
    this.month = 5;
    this.start = 1;
    this.end = 31;
    this.color = "#CCCCCC";
    this.unit = 1;
    this.line = 10;
    this.chartItems = new Array(
        new ChartItem("IP", "#FF00FF", new Array(2, 4, 5, 2, 3, 7, 3, 4, 5, 2, 3, 7, 2, 4, 5, 2, 10, 7, 10, 10, 5, 2, 3, 9, 2, 4, 5, 2, 3, 7, 9)),
        new ChartItem("VP", "#FF0000", new Array(3, 4, 5, 2, 3, 7, 2, 4, 5, 2, 10, 7, 10, 10, 5, 2, 3, 9, 2, 4, 5, 2, 3, 7, 9, 2, 4, 5, 2, 3, 7)),
        new ChartItem("VV", "#FFFF00", new Array(5, 2, 10, 7, 10, 10, 5, 2, 3, 9, 2, 4, 4, 5, 2, 3, 7, 2, 4, 9, 2, 4, 5, 2, 3, 7, 5, 2, 3, 7, 3)),
        new ChartItem("UV", "#0000FF", new Array(3, 7, 2, 4, 5, 2, 10, 7, 10, 3, 4, 5, 2, 10, 5, 2, 3, 9, 2, 4, 5, 2, 3, 7, 9, 2, 4, 5, 2, 3, 7))
    );
};

//X轴上的边距
var xPadding = 5;
//Y轴上的边距
var yPadding = 5;
//X轴上线条的间隔
var xOffset;
//Y轴上线条的间隔
var yOffset;

var textXOffset = 5;
var textYOffset = 7;

function draw() {
    var chartCanvas = document.getElementById("chart");
    var context = chartCanvas.getContext("2d");
    context.imageSmoothingEnabled = false;
    context.translate(0.5, 0.5);
    var chart = new Chart();
    drawTable(context, chartCanvas.width, chartCanvas.height, chart);
    var length = chart.chartItems.length;
    for (var index = 0; index < length; index++) {
        drawChart(context, chartCanvas.width, chartCanvas.height, chart.chartItems[index]);
    }
}

function drawChart(context, width, height, chartItem) {
    context.save();
    context.beginPath();
    context.strokeStyle = chartItem.color;
    context.moveTo(xPadding, height - yPadding);
    for (var i = 0; i < chartItem.data.length; i++) {
        context.lineTo(xOffset * (i + 1) + xPadding, height - chartItem.data[i] * yOffset - yPadding);
        context.moveTo(xOffset * (i + 1) + xPadding, height - chartItem.data[i] * yOffset - yPadding);
    }
    context.stroke();
    context.restore();
}
/**
 * 绘制数据表格
 * @param context 上下文
 * @param width 表格宽度
 * @param height 表格高度
 * @param chart 数据源
 */
function drawTable(context, width, height, chart) {
    context.save();
    context.beginPath();
    //边框样式
    context.lineWidth = chart;
    context.strokeStyle = '#000000';
    //绘制底边框
    context.moveTo(xPadding, height - yPadding);
    context.lineTo(width - xPadding, height - yPadding);
    //绘制左边框
    context.moveTo(xPadding, height - yPadding);
    context.lineTo(xPadding, yPadding);
    //绘制坐标原点文字
    context.fillText("0", textXOffset, height - textYOffset);
    context.stroke();

    //数据标示线样式
    context.beginPath();
    context.lineWidth = chart;
    context.strokeStyle = chart.color;

    // 绘制纵向的数据标示线条
    // 这里标示每月的天数
    // 假设每个月都是31天
    // 实际绘制按照参数进行
    var xCounter = 31 + 1; //31条线分割出32个空间
    xOffset = (width - 2 * xPadding) / xCounter;
    for (var index = chart.start; index < chart.end + 1; index++) {
        var startX = xPadding + index * xOffset;
        context.moveTo(startX, yPadding);
        context.lineTo(startX, height - yPadding);
        context.fillText(append(index, 2), startX - textXOffset, height - textYOffset);
    }

    // 绘制横向的数据标示线条
    var yCounter = chart.line;
    yOffset = (height - 2 * yPadding) / (yCounter + 1);
    for (var index = 1; index < yCounter + 1; index++) {
        var startY = height - yPadding - yOffset * index;
        context.moveTo(xPadding, startY);
        context.lineTo(width - xPadding, startY);
        context.fillText(append(index, 2), xPadding, startY);
    }

    context.stroke();
    context.restore();
}

function append(num, n) {
    var len = num.toString().length;
    while (len < n) {
        num = "0" + num;
        len++;
    }
    return num;
}

window.onload = draw();
/*
 //该数据结构描述了某年某月的流量数据
 {"id":"this is the id","year":"2016","month":"05","start":"01","end":"31","data":[{"name":"IP","color":"#FF00FF","data":["20","20","20"]},{"name":"PV","color":"#FF00FF","data":["20","20","20"]},{"name":"VV","color":"#FF00FF","data":["20","20","20"]},{"name":"UV","color":"#FF00FF","data":["20","20","20"]}]}

 {
 "id": "this is the id",
 "year": "2016",
 "month": "05",
 "start": "01",
 "end": "31",
 "data": [
 {
 "name": "IP",
 "color": "#FF00FF",
 "data": [
 "20",
 "20",
 "20"
 ]
 },
 {
 "name": "PV",
 "color": "#FF00FF",
 "data": [
 "20",
 "20",
 "20"
 ]
 },
 {
 "name": "VV",
 "color": "#FF00FF",
 "data": [
 "20",
 "20",
 "20"
 ]
 },
 {
 "name": "UV",
 "color": "#FF00FF",
 "data": [
 "20",
 "20",
 "20"
 ]
 }
 ]
 }
 */

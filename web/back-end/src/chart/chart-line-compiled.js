"use strict";

/**
 * Created by dingpengwei on 7/15/16.
 */
window.onload = draw();
function ChartItem(name, color, data) {
    this.name = name;
    this.color = color;
    this.data = data;
}
function Chart() {
    this.id = "this is the id";
    this.year = "2016";
    this.month = "05";
    this.start = "01";
    this.end = "31";
    this.color = "#CCCCCC";
    this.max = "100";
    this.chartItems = new Array(new ChartItem("IP", "#FF00FF", new Array("2", "4", "5", "2", "3", "7", "2", "4", "5", "2", "3", "7", "2", "4", "5", "2", "10", "7", "10", "10", "5", "2", "3", "9", "2", "4", "5", "2", "3", "7")));
};

function draw() {
    var chartCanvas = document.getElementById("chart");
    var context = chartCanvas.getContext("2d");
    context.globalCompositeOperation = 'source-atop';
    var chart = new Chart();
    drawTable(context, chartCanvas.width, chartCanvas.height, chart);
    // console.log(chart.chartItems.length)
    drawChart(context, chartCanvas.width, chartCanvas.height, chart.chartItems);
}

function drawChart(context, width, height, chartItems) {
    var length = chartItems.length;
    context.save();
    for (var index = 0; index < length; index++) {
        var chartItem = chartItems[index];
        context.moveTo(xOffset, height - yOffset);
        for (var i = 0; i < chartItem.data.length; i++) {
            context.lineTo(xSpace * (i + 1) + xOffset, height - chartItem.data[i] * ySpace);
            context.moveTo(xSpace * (i + 1) + xOffset, height - chartItem.data[i] * ySpace);
        }
    }
    context.lineWidth = chart;
    context.strokeStyle = '#000000';
    context.stroke();
    context.restore();
}
var xOffset = 5.5;
var yOffset = 5.5;
var xSpace = 0;
var ySpace = 0;
function drawTable(context, width, height, chart) {
    context.save();
    xOffset = 5.5;yOffset = 5.5;
    console.log("画布的宽度和高度分别是:" + xOffset + "-" + yOffset);
    context.moveTo(xOffset, height - yOffset);
    context.lineTo(width - xOffset, height - yOffset);
    context.lineWidth = chart;
    context.strokeStyle = '#000000';
    context.stroke();
    var xCounter = 32;
    xSpace = (width - 2 * xOffset) / xCounter;
    for (var index = 0; index < xCounter; index++) {
        var startX = xOffset + index * xSpace;
        context.moveTo(startX, yOffset);
        context.lineTo(startX, height - yOffset);
        context.fillText(append(index, 2), startX - xOffset, height - 1.5 * yOffset);
    }
    context.restore();
    context.save();
    var yCounter = 10;
    ySpace = (height - 2 * yOffset) / yCounter;
    for (var index = 0; index < yCounter; index++) {
        var startY = yOffset + index * ySpace;
        context.moveTo(xOffset, startY + 5);
        context.lineTo(width - xOffset, startY + 5);
        context.fillText(append(yCounter - index, 2), 0, startY + 5);
    }
    context.lineWidth = chart;
    context.strokeStyle = 'red';
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

//# sourceMappingURL=chart-line-compiled.js.map
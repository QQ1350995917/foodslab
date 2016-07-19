/**
 * Created by dingpengwei on 7/18/16.
 */
/**
 * 定义CircleProgress对象属性
 * @param id canvas的ID
 * @constructor
 */
function CircleProgress(id) {
    this.progress = document.getElementById(id);
    this.context = this.progress.getContext("2d");
    this.centerX = this.progress.width / 2;
    this.centerY = this.progress.height / 2;
    this.radius = Math.min(this.progress.width, this.progress.height) / 3;
    this.context.translate(this.centerX, this.centerY);
}

/**
 * 绘制
 */
CircleProgress.prototype.drawCircleProgress = function () {
    this.context.clearRect(0 - this.centerX, 0 - this.centerY, 2 * this.centerX, 2 * this.centerY);
    var preRadius = 15;
    var preAngle = 0;
    var currentRadius = preRadius;
    for (var index = 0; index < 15; index++) {
        var currentAngle = Math.acos(((2 * Math.pow(this.radius, 2) - Math.pow((preRadius + currentRadius), 2)) - 5) / (2 * Math.pow(this.radius, 2))) * (180 / Math.PI);
        var location = getArcLocation(this.radius, -(currentAngle + preAngle) * Math.PI / 180);
        this.context.fillStyle = '#FFFFFF';
        this.context.beginPath();
        this.context.arc(location[0], location[1], currentRadius, 0 * Math.PI, 2 * Math.PI, true);
        this.context.closePath();
        this.context.fill();
        preRadius = currentRadius;
        currentRadius--;
        preAngle += currentAngle;
    }
}

/**
 * 根据半径和弧度计算绘制坐标
 * @param radius 大圆半径
 * @param arc 偏差弧度
 * @returns {Array} 小圆圆心坐标
 */
function getArcLocation(radius, arc) {
    var x = radius * Math.cos(arc);
    var y = radius * Math.sin(arc);
    return new Array(x, y);
}

/**
 * 给CircleProgress添加旋转函数
 * @param interval
 */
CircleProgress.prototype.rotate = function (interval) {
    this.drawCircleProgress();
    var progress = this;
    CircleProgress.prototype.task = setInterval(function () {
        progress.context.rotate(10 * Math.PI / 180);
        progress.drawCircleProgress();
    }, interval);
}

/**
 * 显示进度
 * 动态创建显示对象
 * 并且屏蔽相关的键盘鼠标事件
 */
function showLoadingView() {
    var mask = document.createElement('div');
    mask.id = "mask";
    mask.style.backgroundColor = "#999999";
    mask.style.width = "100%";
    mask.style.height = "100%";
    mask.style.left = "0px";
    mask.style.top = "0px";
    mask.style.position = "absolute";
    mask.style.zIndex = "10";
    mask.style.opacity = "0.6";
    document.body.appendChild(mask);

    var canvas = document.createElement('canvas');
    canvas.id = "canvas";
    canvas.style.backgroundColor = "#00FFFFFF";
    canvas.style.width = document.body.clientWidth / 5 + "px";
    canvas.style.height = document.body.clientHeight / 5 + "px";
    canvas.style.left = 2 * document.body.clientWidth / 5 + "px";
    canvas.style.top = document.body.clientHeight / 5 + "px";
    canvas.style.zIndex = "10";
    canvas.style.position = "absolute";
    canvas.style.opacity = "0.9";
    document.body.appendChild(canvas);


    var button = document.createElement('button');
    button.id = "button";
    button.style.styleFloat = "left";
    button.innerHTML = "close";
    button.style.width = document.body.clientWidth / 5 + "px";
    button.style.height = "100px";
    button.style.left = 2 * document.body.clientWidth / 5 + "px";
    button.style.top = 2 * document.body.clientHeight / 5 + "px";
    button.style.zIndex = "10";
    button.style.position = "absolute";
    button.style.backgroundColor = "red";
    button.style.opacity = "0.9";
    button.style.cursor = "pointer";
    button.addEventListener("click", dismissLoadingView);
    document.body.appendChild(button);

    document.documentElement.style.overflow = 'hidden';

    clearInterval(CircleProgress.prototype.task);
    var progress = new CircleProgress('canvas');
    progress.rotate(30);

    // document.onkeydown = onkeydown;

    document.oncontextmenu = new Function("event.returnValue=false;");
    document.onselectstart = new Function("event.returnValue=false;");
    window.onhelp = new Function("event.returnValue=false;"); //屏蔽F1帮助


    document.onkeydown = function () {
        if (window.event && window.event.keyCode == 13) {
            window.event.returnValue = false;
        }
    }
}

/**
 * 移除动态创建的view对象
 * 并回复键盘鼠标事件
 */
function dismissLoadingView() {
    document.onkeydown = null;
    document.body.removeChild(document.getElementById('button'));
    document.body.removeChild(document.getElementById('mask'));
    document.body.removeChild(document.getElementById('canvas'));
    document.documentElement.style.overflow = 'scroll';
    clearInterval(CircleProgress.prototype.task);
    document.oncontextmenu = new Function("event.returnValue=true;");
    document.onselectstart = new Function("event.returnValue=true;");
}

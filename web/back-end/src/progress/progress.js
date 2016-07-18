/**
 * Created by dingpengwei on 7/18/16.
 */
function CircleProgress(rotateAngle, id) {
    this.progress = document.getElementById(id);
    this.context = this.progress.getContext("2d");
    this.radius = Math.min(this.progress.width, this.progress.height) / 3;
    this.centerX = this.progress.width / 2;
    this.centerY = this.progress.height / 2;
    this.context.translate(this.centerX,this.centerY);
}

CircleProgress.prototype.drawCircleProgress = function () {
    this.context.clearRect(0-this.centerX,0-this.centerY,2*this.centerX,2*this.centerY);
    var initRadius = 15;
    var preAngle = 0;
    var currentRadius = initRadius;
    for (var index = 0; index < 15; index++) {
        var currentAngle = Math.acos((2 * Math.pow(this.radius, 2) - Math.pow((initRadius + currentRadius), 2)) / (2 * Math.pow(this.radius, 2))) * (180 / Math.PI);
        var location = getArcLocation(this.radius, - (currentAngle + preAngle) * Math.PI / 180);
        this.context.beginPath();
        this.context.fillStyle = "#FFFFFF"
        this.context.arc(location[0], location[1], currentRadius, 0 * Math.PI, 2 * Math.PI, true);
        this.context.closePath();
        this.context.fill();
        currentRadius--;
        preAngle += currentAngle;
    }
}


function getArcLocation(radius, arc) {
    var x = radius * Math.cos(arc);
    var y = radius * Math.sin(arc);
    return new Array(x, y);
}


CircleProgress.prototype.rotate = function (interval) {
    this.drawCircleProgress();
    var progress = this;
    CircleProgress.prototype.task = setInterval(function () {
        progress.context.rotate(10 * Math.PI / 180);
        progress.drawCircleProgress();
    }, interval);
}

//http://www.cnblogs.com/varlxj/p/taiji.html
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

    var button = document.createElement('button');
    button.id = "button";
    button.innerHTML = "close";
    button.style.width = "200px";
    button.style.height = "200px";
    button.style.zIndex = "10";
    button.style.position = "relative";
    button.style.backgroundColor = "red";
    button.style.opacity = "0.9";
    button.style.cursor = "pointer";
    button.addEventListener("click", dismissLoadingView);
    document.body.appendChild(button);

    var canvas = document.createElement('canvas');
    canvas.id = "canvas";
    canvas.style.backgroundColor = "00FFFFFF";
    canvas.style.width = "400";
    canvas.style.height = "400";
    canvas.style.left = "400px";
    canvas.style.top = "100px";
    canvas.style.position = "absolute";
    canvas.style.zIndex = "10";
    canvas.style.opacity = "0.6";
    document.body.appendChild(canvas);


    document.documentElement.style.overflow = 'hidden';

    clearInterval(CircleProgress.prototype.task);
    var progress = new CircleProgress(200, 'canvas');
    progress.rotate(30);

}

function dismissLoadingView() {
    document.body.removeChild(document.getElementById('button'));
    document.body.removeChild(document.getElementById('mask'));
    document.documentElement.style.overflow = 'scroll';
    clearInterval(CircleProgress.prototype.task);
}
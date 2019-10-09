function Draw(contextId) {
    this.canvas = document.getElementById(contextId);
    this.context = this.canvas.getContext("2d");
}

Draw.prototype.clear = function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Draw.prototype.drawCircle = function(color, x, y, radius) {
    with(this.context) {
        beginPath();
        strokeStyle = color;
        fillStyle = color;
        arc(x, y, radius, 0, 2*Math.PI, true);
        fill();
        stroke();
        closePath();
    }
};

Draw.prototype.drawText = function(msg, x, y, color = "#fff", fSize = 24) {
    with(this.context) {
        beginPath();
        strokeStyle = color;
        font = fSize + "px Courier New";
        strokeText(msg, x, y);
        closePath();
    }
};

//Draw a node with value its value
Draw.prototype.drawNode = function(value, color, x, y, radius, showName) {
    this.drawCircle(color, x, y, radius);
    if(showName) {
        this.drawText(value, x - (radius / 2) + (radius / 10), y + (radius / 2 - 3), '#fff', parseInt(radius * 1.25));
    }
};

//Draw a line between points (x1, y1) and (x2, y2)
Draw.prototype.drawLine = function(x1, y1, x2, y2, width = 2, color = "#fff") {
    with(this.context) {
        beginPath();
        strokeStyle = color;
        lineWidth = width;
        moveTo(x1, y1);
        lineTo(x2, y2);
        stroke();
        closePath();
    }
};
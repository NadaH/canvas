var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// c.fillStyle = 'rgba(32, 40, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);
// c.fillStyle = 'rgba(235, 300, 3, 0.5)';
// c.fillRect(100, 400, 100, 100);
// c.fillStyle = 'rgba(100, 5, 521, 0.5)';
// c.fillRect(500, 100, 100, 100);

// //Line
// c.beginPath();
// c.moveTo(50,300);
// //Draw line
// c.lineTo(300,100);
// c.lineTo(300,200);
// //c color
// c.strokeStyle = "#93c";
// //strock method
// c.stroke();
//
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// // many circle
// for(var i=0; i < 200; i++){
//     var x = Math.random()*window.innerWidth;
//     var y = Math.random()*window.innerHeight;
//     var t = Math.round(Math.random()*100);
//     var g = Math.round(Math.random()*100);
//     var b = Math.round(Math.random()*100);
//     var a = Math.random();

//     //arc, circle
//     c.beginPath();
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = 'rgba(t,g,b,a)';
//     c.stroke();
// }
// console.log(t,g,b,a);

//create an object
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.raduis = radius;

    this.draw = function () {
        c.clearRect(0, 0, innerWidth, innerHeight);
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
    }
    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

//instantiate an object
var circle = new Circle(200, 200, 3,3,30);

var x = Math.random() * innerWidth;
var dx = (Math.random() - 0.5) * 8;
var y = Math.random() * innerHeight;
var dy = (Math.random() - 0.5) * 12;
var radius = 30;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circle.draw();
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx
    }
    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

animate();
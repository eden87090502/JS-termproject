//設定球的屬性
const Ball = function(x, y, radius) {

    this.color = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    this.direction = Math.random() * Math.PI * 2;
    this.radius = radius;
    this.speed = Math.random() * 3 + 1;
    this.x = x;
    this.y = y;

  };


//球的移動
Ball.prototype = {
    updatePosition:function(width, height) {

    this.x += Math.cos(this.direction) * this.speed;
    this.y += Math.sin(this.direction) * this.speed;
    
    //碰撞
    //x-碰撞
    if(this.x - this.radius < 0) {
        this.x = this.radius;
        this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
    } else if (this.x + this.radius > width) {
        this.x = width - this.radius;
        this.direction = Math.atan2(Math.sin(this.direction), Math.cos(this.direction) * -1);
    }


    //y-碰撞
    if(this.y - this.radius < 0) {
        this.y = this.radius;
        this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
    } else if (this.y + this.radius > height) {

        this.y = height - this.radius;
        this.direction = Math.atan2(Math.sin(this.direction) * -1, Math.cos(this.direction));
        }
    }

};

var context = document.querySelector("canvas").getContext("2d");

var balls = new Array();

let x = document.documentElement.clientWidth * 0.5;
let y = document.documentElement.clientHeight * 0.5;

//製造很多球
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};
number = getRandom(3,10);  //3~10亂數產生一個數

for(let index = 0; index < number; index ++) {
    balls.push(new Ball(x, y, Math.floor(Math.random() * 10 + 40)));
    }


function loop() {
    
    window.requestAnimationFrame(loop);

    let height = document.documentElement.clientHeight;
    let width  = document.documentElement.clientWidth;
    
    //調整畫布大小
    context.canvas.height = height;
    context.canvas.width = width;

    for(let index = 0; index < balls.length; index ++) {
        
        let ball = balls[index];

        context.fillStyle = ball.color;
        context.beginPath();
        context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        context.fill();

        ball.updatePosition(width, height);

    }

}
loop();
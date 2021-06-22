//製造地圖
let mapBg = document.getElementById("mapBg");

function makeMap(){
    for (let row=0; row<20 ;row++){
    let Tr = document.createElement('tr');
    for(let col=0; col<30 ;col++){
        let Td = document.createElement('td');
        Tr.appendChild(Td);
        // 將td加到tr裡
    }
    mapBg.appendChild(Tr);
    // 將td加到mapBg的table裡
    }
}

makeMap();


//製造一開始的蛇
let snakeBody =[];

let map = document.getElementById('map');

function makeSnake(){
    for(let i=2; i>=0 ;i--){     //要注意蛇頭的排列順序
        let snake = document.createElement('div');
        snake.className = "snake";
        //並列的小蛇
        snake.style.left = (20*i + (i+1) )+"px";
        map.appendChild(snake);
        snake.posi={              //第一輪三格蛇的位子
            left:20*i + (i+1),
            top:64,
        };
        snakeBody.push(snake);   
    }    
}
makeSnake();

// 製造食物：食物的規律：不能超過四個邊界、不能跟蛇重疊
let bFlag = true;
let food;

function makefood(){
    do {
        //食物的左邊座標
        let left = parseInt(Math.random()*30);
        left = left*21 +1;
        //食物的上面座標
        let top = parseInt(Math.random()*20);
        top = top*21 +1;
    
        //是不是跟身體重疊
        // .offsetLeft 左邊的長度
        for(var k=0 ;k<snakeBody.length;k++){
            if (snakeBody[k].offsetLeft == left && 
                snakeBody[k].offsetTop == top){
                    bFlag = false;
                }
        }
    
        food = document.createElement("div");
        food.className = "food";
        food.style.left = left +'px';
        food.style.top = top +'px';

        food.posi={
            left:left,
            top:top
        };
        map.appendChild(food);
    }while(!bFlag);
}
makefood();


//蛇的移動
function snakeMove(){
    let snakeHead =snakeBody[0]; //蛇頭

        if(direction =="down"){ //蛇頭轉向  
            snakeHead.style.top = snakeHead.offsetTop+21+"px";
        }else if(direction =="right"){ 
            snakeHead.style.left = snakeHead.offsetLeft+21+"px";
        }else if(direction =="up"){ 
            snakeHead.style.top = snakeHead.offsetTop-21+"px";
        }else if(direction =="left"){ 
            snakeHead.style.left = snakeHead.offsetLeft-21+"px";
        }

        //鍵盤只會影響蛇頭轉向，其餘的會跟著前一格動
        //蛇身要移到蛇頭還沒移動前的位置
        for (var j=1 ;j<snakeBody.length;j++){
            snakeBody[j].style.left =
                    snakeBody[j-1].posi.left + "px";
            snakeBody[j].style.top =
                    snakeBody[j-1].posi.top + "px";
        }

        //蛇吃食物
        if (snakeHead.offsetLeft == food.offsetLeft &&
            snakeHead.offsetTop == food.offsetTop){
                food.className="snake";
                // snakeBody.push(food);   //食物應該放在第二節
                snakeBody.splice(1,0,food) //在第一個索引值刪掉0個元素並插入food
                makefood();
            }

        //更新第一輪後蛇的位子
        for(let i=0; i<snakeBody.length;i++){
            snakeBody[i].posi.left = snakeBody[i].offsetLeft;
            snakeBody[i].posi.top = snakeBody[i].offsetTop;
        }

        //蛇吃到自己；最多只會吃到第四個
        for (let i=4 ;i<snakeBody.length ; i++){
            if (snakeHead.offsetTop == snakeBody[i].offsetTop &&
                snakeHead.offsetLeft == snakeBody[i].offsetLeft){
                    gameOver = document.getElementById("gameOver");
                    gameOver.innerHTML = "gameOver";
                    clearInterval(timer);
                }                
        }

        //蛇吃到邊界
        if(snakeHead.offsetLeft== -20 || snakeHead.offsetLeft==631 ||
            snakeHead.offsetTop==-20 || snakeHead.offsetTop==421){
                gameOver = document.getElementById("gameOver");
                gameOver.innerHTML = "gameOver";
                clearInterval(timer);
            }
}


//蛇開始動
let start = document.getElementById("start");
let timer;
//定時器，每 3 秒移動
start.onclick = function(){
    timer = setInterval(function(){
        snakeMove();    

    },300);
};  

// let timer; //undefined
// //定時器，每 3 秒移動
// start.onclick = function(){
//     if(!timer){
//         timer = setInterval(function(){
//             snakeMove();    
//         },300);
//     }  
// };  

//設定蛇移動的方向
let direction = "right";
// 鍵盤按上下左右鍵 -> 決定蛇移動的方向
document.onkeydown = function(event){
    event =event||window.event;
    var key = event.which || event.keyCode;
    // 左上右下的key:37、38、39、40
    //往上走的蛇不能按下鍵
    if(key==40){
        if(direction != "up"){
            direction="down";
        }
    }else if(key==39){
        if(direction != "left"){
            direction="right";
        }
    }else if(key==38){
        if(direction !="down"){
            direction="up";
        }
    }else if(key==37){
        if(direction!="right"){
            direction="left";
        } 
    }
  
    snakeMove(); 
};


var pong1;
var pong2;
var ball;
var myScore;
var myScore1;
var point1 = 0;
var point2 = 0;
var gif1 = document.getElementById("gif1");
var gif2 = document.getElementById("gif2");
var gif3 = document.getElementById("gif3");


function startGame() {
    myGameArea.start();
    
    pong1 = new component(8 , 60 , "yellow" , 20 , 150);
    pong2 = new component(8 , 60 , "lime" , 670 , 150);
    ball = new component(7 , 7 , "orange" , 350, 170);
    myScore = new component("16px" , "consolas" , "yellow" , 200 , 25 , "text");
    myScore1 = new component("16px" , "consolas" , "lime" , 410 , 25 , "text");
}

var myGameArea = {
    canvas : document.getElementById('canvas'),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 390;
        this.context = this.canvas.getContext('2d');
        this.interval = setInterval(updateGameArea , 30);
        
        window.addEventListener('keydown' , function(e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
        })
        
        window.addEventListener('keyup' , function(e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = false;
        })
    },
    
    clear:function() {
        this.context.clearRect(0,0, this.canvas.width, this.canvas.height);
    },
    stop:function() {
        clearInterval(this.interval);
    }
}

// Constructor function to create different objects //

function component(width , height , color , x , y , type ) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.img;
    
    this.update = function() {
        ctx = myGameArea.context;
        if (this.type == "text") {
            ctx.font = this.width + " " + this.height;
            ctx.fillStyle = color;
            ctx.fillText(this.text, this.x, this.y);
            // getGif(this);
            if (this.img) {
               // ctx.drawImage(this.img, this.x, this.y);
            }
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
            
        }
    this.newPos = function() {
        this.x += this.speedX
        this.y += this.speedY
    }
    this.crashWith = function( otherobj ) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        
        if((mybottom < othertop) || (mytop > otherbottom) || (myright < otherleft) || (myleft > otherright)) {
           crash = false;
           }
           return crash;
    }

   
}

function addGif(elem, query) {
    console.log(elem, query);
        var key = "uTtk10NFnmdtYP4f3URNps6BFeFqh1Jq";
    
        
        var url = "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=" + key + "&limit=50";
        $.getJSON(url, function(json) {
            console.log(json.data);
            var img = json.data[ Math.floor(Math.random() * json.data.length)];
            elem.src =  img.images.downsized.url;
        });
    }

// Update Game Function //

function updateGameArea(){

// pong control //
    
    if(pong1.y <= 0) {
        pong1.y = 0;
    }
    if(pong1.y >= 340) {
        pong1.y = 340;
    }
    if(pong2.y <= 0) {
        pong2.y = 0;
    }
    if(pong2.y >= 340) {
        pong2.y = 340;
    }
    
            
    // Keyboard contract //

    if (myGameArea.keys && myGameArea.keys [38]) {
        console.log('arrow up');
        pong1.y -= 10;
        if(ball.crashWith(pong1)) {
           ball.speedY = -4;
           ball.speedX = 14;
        }
    }

    if (myGameArea.keys && myGameArea.keys [40]) {
        console.log('arrow down');
        pong1.y += 10;
        if(ball.crashWith(pong1)) {
           ball.speedY = 4;
           ball.speedX = 14;
        }
    }

    if (myGameArea.keys && myGameArea.keys [37]) {
        pong2.y -= 10;
        if(ball.crashWith(pong2)) {
           ball.speedY = -4;
           ball.speedX = -8;
        }
    }   

    if (myGameArea.keys && myGameArea.keys [39]) {
        pong2.y += 10;
        if(ball.crashWith(pong2)) {
           ball.speedY = 4;
           ball.speedX = -8;
        }
    }     
    
    // Ball Movements //
    
    ball.newPos();
    if(ball.crashWith(pong1)) {
        ball.speedY = 0;
        ball.speedX = 13;
    }
    else if(ball.crashWith(pong2)) {
        ball.speedY = 0;
        ball.speedX = -8;
    }
    else {
        ball.x += -4;
    }
    
    if(ball.y <= 0) {
        ball.speedY = 4;
    }
    if(ball.y >= 390) {
        ball.speedY = -4;
    }
    if(ball.x <= 2) {
        ball.x = 690;
        point2 += 1;
        addGif(gif1, "amazing");
    }
    if(ball.x >= 700) {
        ball.x = 0;
        point1 += 1;
        addGif(gif2, "happy")    
    }
    
    
    myGameArea.clear();
    pong1.update();
    pong2.update();
    ball.update();
    
    if(point1 == 10 || point2 == 10){
        addGif(gif3,"congrats");
        
        point1 = 0;
        point2 = 0;
        myGameArea.stop();
        var restart=document.createElement("button");
        restart.textContent = "start again";
        document.getElementById("container").appendChild(restart);
        restart.onclick = function(){
            myGameArea.start();
            restart.remove();    
        }
    } 
    
        
    myScore.text = "Score : " + point1; 
    myScore1.text = "Score : " + point2;
    myScore.update();
    myScore1.update();
}
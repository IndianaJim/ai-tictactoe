var button = [];
var ctx = [];
var bDisabled = [];
var content = [];
var isResult = false;
var player = 'X';
var comp = '0';

for (var i=1; i < 10; i++){
  button[i] = document.getElementById('canvas'+i);
  ctx[i] = button[i].getContext('2d');
  bDisabled[i] = false;
}

function resetBoard(){
 isResult = false;
 for (var i=1; i < 10; i++){
  button[i] = document.getElementById('canvas'+i);
  ctx[i] = button[i].getContext('2d');
  bDisabled[i] = false;
  content[i] = "";
  ctx[i].beginPath();
  ctx[i].rect(0, 0, 100, 100);
  ctx[i].fillStyle = '#5DD39E';
  ctx[i].fill();
  ctx[i].stroke();
  ctx[i].closePath();
 }
}

function loop(x){
  
  if(!bDisabled[x]){
    bDisabled[x] = true;
    /* button[x].style.opacity = 0.7; */
    content[x] = 'X';
    
    button[x].style.Transform = 'rotateX(180deg)';
    button[x].style.webkitTransform = 'rotateX(180deg)';
    button[x].style.msTransform = 'rotateX(180deg)';
    button[x].style.oTransform = 'rotateX(180deg)';
    button[x].style.mozTransform = 'rotateX(180deg)';
    
    setTimeout(function(){
          ctx[x].lineWidth = 4;
          ctx[x].beginPath();
          ctx[x].moveTo(20,20);
          ctx[x].lineTo(80,80);
          ctx[x].moveTo(80,20);
          ctx[x].lineTo(20,80);
          ctx[x].stroke();
          ctx[x].closePath();
          checkWinner();
          if (!isResult) computerTurn();
          
    }, 300);
  }//end if !bdisabled[x]
}//end func loop  
  function computerTurn(){
   if (!isResult){ 
    var r = Math.random();
     
    //computer turn using defense and offense 
    if (content[1] == 'X' && content[2] == 'X' && !bDisabled[3]) draw0Steps(3);
    else if (content[1] == 'X' && content[3] == 'X' && !bDisabled[2]) draw0Steps(2);
    else if (content[2] == 'X' && content[3] == 'X' && !bDisabled[1]) draw0Steps(1);
     
    else if (content[4] == 'X' && content[5] == 'X' && !bDisabled[6]) draw0Steps(6);
    else if (content[4] == 'X' && content[6] == 'X' && !bDisabled[5]) draw0Steps(5);
    else if (content[5] == 'X' && content[6] == 'X' && !bDisabled[4]) draw0Steps(4);
   
    else if (content[7] == 'X' && content[8] == 'X' && !bDisabled[9]) draw0Steps(9);
    else if (content[7] == 'X' && content[9] == 'X' && !bDisabled[8]) draw0Steps(8);
    else if (content[8] == 'X' && content[9] == 'X' && !bDisabled[7]) draw0Steps(7);
  
    else if (content[1] == 'X' && content[4] == 'X' && !bDisabled[7]) draw0Steps(7);
    else if (content[1] == 'X' && content[7] == 'X' && !bDisabled[4]) draw0Steps(4);
    else if (content[4] == 'X' && content[7] == 'X' && !bDisabled[1]) draw0Steps(1);
 
    else if (content[2] == 'X' && content[5] == 'X' && !bDisabled[8]) draw0Steps(8);
    else if (content[2] == 'X' && content[8] == 'X' && !bDisabled[5]) draw0Steps(5);
    else if (content[5] == 'X' && content[8] == 'X' && !bDisabled[2]) draw0Steps(2);

    else if (content[3] == 'X' && content[6] == 'X' && !bDisabled[9]) draw0Steps(9);
    else if (content[3] == 'X' && content[9] == 'X' && !bDisabled[6]) draw0Steps(6);
    else if (content[6] == 'X' && content[9] == 'X' && !bDisabled[3]) draw0Steps(3);
  
    else if (content[3] == 'X' && content[5] == 'X' && !bDisabled[7]) draw0Steps(7);
    else if (content[3] == 'X' && content[7] == 'X' && !bDisabled[5]) draw0Steps(5);
    else if (content[5] == 'X' && content[7] == 'X' && !bDisabled[3]) draw0Steps(3);
 
    else if (content[1] == 'X' && content[5] == 'X' && !bDisabled[9]) draw0Steps(9);
    else if (content[1] == 'X' && content[9] == 'X' && !bDisabled[5]) draw0Steps(5);
    else if (content[5] == 'X' && content[9] == 'X' && !bDisabled[1]) draw0Steps(1);
    
    //if nothing to block, any way to win?
    else if (content[1] == '0'&& content[2] == '0'&& !bDisabled[3]) draw0Steps(3);
    else if (content[1] == '0'&& content[3] == '0'&& !bDisabled[2]) draw0Steps(2);
    else if (content[2] == '0'&& content[3] == '0'&& !bDisabled[1]) draw0Steps(1);
     
    else if (content[4] == '0'&& content[5] == '0'&& !bDisabled[6]) draw0Steps(6);
    else if (content[4] == '0'&& content[6] == '0'&& !bDisabled[5]) draw0Steps(5);
    else if (content[5] == '0'&& content[6] == '0'&& !bDisabled[4]) draw0Steps(4);
   
    else if (content[7] == '0'&& content[8] == '0'&& !bDisabled[9]) draw0Steps(9);
    else if (content[7] == '0'&& content[9] == '0'&& !bDisabled[8]) draw0Steps(8);
    else if (content[8] == '0'&& content[9] == '0'&& !bDisabled[7]) draw0Steps(7);
  
    else if (content[1] == '0'&& content[4] == '0'&& !bDisabled[7]) draw0Steps(7);
    else if (content[1] == '0'&& content[7] == '0'&& !bDisabled[4]) draw0Steps(4);
    else if (content[4] == '0'&& content[7] == '0'&& !bDisabled[1]) draw0Steps(1);
 
    else if (content[2] == '0'&& content[5] == '0'&& !bDisabled[8]) draw0Steps(8);
    else if (content[2] == '0'&& content[8] == '0'&& !bDisabled[5]) draw0Steps(5);
    else if (content[5] == '0'&& content[8] == '0'&& !bDisabled[2]) draw0Steps(2);

    else if (content[3] == '0'&& content[6] == '0'&& !bDisabled[9]) draw0Steps(9);
    else if (content[3] == '0'&& content[9] == '0'&& !bDisabled[6]) draw0Steps(6);
    else if (content[6] == '0'&& content[9] == '0'&& !bDisabled[3]) draw0Steps(3);
  
    else if (content[3] == '0'&& content[5] == '0'&& !bDisabled[7]) draw0Steps(7);
    else if (content[3] == '0'&& content[7] == '0'&& !bDisabled[5]) draw0Steps(5);
    else if (content[5] == '0'&& content[7] == '0'&& !bDisabled[3]) draw0Steps(3);
 
    else if (content[1] == '0'&& content[5] == '0'&& !bDisabled[9]) draw0Steps(9);
    else if (content[1] == '0'&& content[9] == '0'&& !bDisabled[5]) draw0Steps(5);
    else if (content[5] == '0'&& content[9] == '0'&& !bDisabled[1]) draw0Steps(1);
     
    //computer turn using just random number 
    else if(r < 0.1 && !bDisabled[1]) draw0Steps(1);
    else if(r < 0.2 && !bDisabled[2]) draw0Steps(2);
    else if(r < 0.3 && !bDisabled[3]) draw0Steps(3);
    else if(r < 0.4 && !bDisabled[4]) draw0Steps(4);
    else if(r < 0.5 && !bDisabled[5]) draw0Steps(5);
    else if(r < 0.6 && !bDisabled[6]) draw0Steps(6);
    else if(r < 0.7 && !bDisabled[7]) draw0Steps(7);
    else if(r < 0.8 && !bDisabled[8]) draw0Steps(8);
    else if(r < 1.0 && !bDisabled[9]) draw0Steps(9);
    else computerTurn();
    }//end if !isresult
  }//end func computerturn
  
  function draw0Steps(x){
   if (!isResult){
    bDisabled[x] = true;
    /* button[x].style.opacity = 0.9; */
    content[x] = '0';
    button[x].style.Transform = "rotateY(180deg)";
    button[x].style.webkitTransform = "rotateY(180deg)";
    button[x].style.mozTransform = "rotateY(180deg)";
    button[x].style.msTransform = "rotateY(180deg)";
    button[x].style.oTransform = "rotateY(180deg)";
    
    setTimeout(function(){
         ctx[x].lineWidth = 4;
         ctx[x].beginPath();
         ctx[x].arc(50, 50, 35, 0, Math.PI*2, false);
         ctx[x].stroke();
         ctx[x].closePath();
         checkWinner();
    }, 300);
   }//end if !isresult
 }//end func draw0steps

function checkWinner(){
  if (!isResult){
    if(content[1] =='X' && content[2] == 'X' && content[3] == 'X') showWinner(1,2,3,"You Win!");
    else if(content[1] =='0' && content[2] == '0' && content[3] == '0') showWinner(1,2,3,"Computer Wins!");
    else if(content[4] =='X' && content[5] == 'X' && content[6] == 'X') showWinner(4,5,6,"You Win!");
    else if(content[4] =='0' && content[5] == '0' && content[6] == '0') showWinner(4,5,6,"Computer Wins!");
    else if(content[7] =='X' && content[8] == 'X' && content[9] == 'X') showWinner(7,8,9,"You Win!");
    else if(content[7] =='0' && content[8] == '0' && content[9] == '0') showWinner(7,8,9,"Computer Wins!");    
    else if(content[1] =='X' && content[4] == 'X' && content[7] == 'X') showWinner(1,4,7,"You Win!");
    else if(content[1] =='0' && content[4] == '0' && content[7] == '0') showWinner(1,4,7,"Computer Wins!");
    else if(content[2] =='X' && content[5] == 'X' && content[8] == 'X') showWinner(2,5,8,"You Win!");
    else if(content[2] =='0' && content[5] == '0' && content[8] == '0') showWinner(2,5,8,"Computer Wins!");
    else if(content[3] =='X' && content[6] == 'X' && content[9] == 'X') showWinner(3,6,9,"You Win!");
    else if(content[3] =='0' && content[6] == '0' && content[9] == '0') showWinner(3,6,9,"Computer Wins!");
    else if(content[1] =='X' && content[5] == 'X' && content[9] == 'X') showWinner(1,5,9,"You Win!");
    else if(content[1] =='0' && content[5] == '0' && content[9] == '0') showWinner(1,5,9,"Computer Wins!");
    else if(content[3] =='X' && content[5] == 'X' && content[7] == 'X') showWinner(3,5,7,"You Win!");
    else if(content[3] =='0' && content[5] == '0' && content[7] == '0') showWinner(3,5,7,"Computer Wins!");
    else { //testing for a game draw
       for (var i = 1; (content[i] == 'X' || content[i] == '0'); i++){
         if (i == 9) showWinner('Draw');
       }
     }//end else, testing for a game draw
     
  }
  
}
function showWinner(a,b,c,text){
  isResult = true;
  
  for (var i = 1; i < 10; i++){
    bDisabled[i] = true;
  } 
  
  setTimeout(function(){ alert(text);}, 50);
  
  button[a].style.backgroundColor = "#BCE784";
  button[b].style.backgroundColor = "#BCE784";
  button[c].style.backgroundColor = "#BCE784";
  
  document.getElementById('choiceDiv').style.visibility = 'visible';
  
}
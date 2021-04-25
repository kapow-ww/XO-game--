var turn = 0;

let boardOX = [
    " "," "," "
    ," "," "," "
    ," "," "," "
];

function playerturn(){
    if(turn == 0){
        return "O";
    }
    else if(turn == 1){
        return "X";
    }
}

function changeTurn() {
    if(turn == 1){
        turn--;
    }
    else if (turn == 0){
        turn++;
    }
}

function checkWin(){
    return(
        (boardOX[0]== playerturn() && boardOX[1]== playerturn() && boardOX[2] == playerturn())||
        (boardOX[3]== playerturn() &&boardOX[4]== playerturn() &&boardOX[5]== playerturn())||
        (boardOX[6]== playerturn() &&boardOX[7]== playerturn() &&boardOX[8]== playerturn())||
        (boardOX[1]== playerturn() &&boardOX[4]== playerturn() &&boardOX[7]== playerturn())||
        (boardOX[0]== playerturn() &&boardOX[3]== playerturn() &&boardOX[6]== playerturn())||
        (boardOX[2]== playerturn() &&boardOX[5]== playerturn() &&boardOX[8]== playerturn())||
        (boardOX[0]== playerturn() &&boardOX[4]== playerturn() &&boardOX[8]== playerturn())||
        (boardOX[6]== playerturn() &&boardOX[4]== playerturn() &&boardOX[2]== playerturn())
    );
}

function checkDraw(){
    var i;
    var draw = true;
    for(i=0; i < boardOX.length; i++){
        if(boardOX[i] == " "){
            draw = false;
            break;
        }
    }
    if(draw == true){
        alert("เสมอกันนะงื้อๆ");
        location.reload();
    }
    
    
}


//ตรวจเช็คตารางว่ามีว่างหรือไม่
function checkTable(id) {
    var MsgEvent = document.getElementById("msgIngame");
    var cutword = id.split("square-");
    
    if(boardOX[cutword[1]-1] === " "){
        document.getElementById(id).innerHTML = playerturn();
        document.getElementById(id).value = playerturn();
        
        boardOX[cutword[1]-1] = playerturn();
        if(checkWin() == true){
            console.log(turn)
            alert("ผู้เล่น " + playerturn() +" ชนะ");
            location.reload();
        }
        else{
            changeTurn();
            document.getElementById("msg-turn").innerHTML = "เทิร์นของ : " + playerturn();
            //console.log(playerturn())
        }
    }
    else{
        MsgEvent.innerHTML = "ไม่สามารถลงในตำแหน่งที่ " + cutword[1] + " นี้ได้" ;
    }
}

//รับข้อมูลเข้ามาจากการกด
function playGame(id){
    checkTable(id);
    checkDraw();
    //console.log(boardOX);
    //console.log("Turn " + turn);
    
}


const select_box = document.querySelector(".select_box");
const playerX = select_box.querySelector(".playerX");
const playerO = select_box.querySelector(".playerO");
const game_box = document.querySelector(".game_box");
const anim_playerall = game_box.querySelector(".anim_playerall");
const span_box = game_box.querySelector("section span") ;
const allspan_box = game_box.querySelectorAll("section span");
const player_box = game_box.querySelector(".player_box");
const result_box = document.querySelector(".result_box");
const result_text = result_box.querySelector(".result_text");
const replay_btn = result_box.querySelector(".replay_btn");
const game_over = game_box.querySelector(".game_over");





// 
playerX.addEventListener("click",()=>{
    select_box.classList.add("hide");
    game_box.classList.add("show");
    // anim_playerall.classList.remove("anim_change");
    

});
playerO.addEventListener("click",()=>{
    select_box.classList.add("hide");
    game_box.classList.add("show");
    anim_playerall.classList.add("anim_change");
    // players.setAttribute("class", "players active player");

});

for(i = 0; i < allspan_box.length; i++){
    allspan_box[i].setAttribute("onclick", "showSpanValue(this)");
};



let crossIcon = `<i class ="fas fa-times"></i>`;
let circleIcon = `<i class ="far fa-circle"></i>`;
let playerSign = "X";

function showSpanValue(element){

    if(anim_playerall.classList.contains("anim_change")){
        element.innerHTML = circleIcon;
        anim_playerall.classList.remove("anim_change");
        element.classList.add("clicked");
        playerSign = "O";
        element.setAttribute("id", playerSign);
        element.style.color = "black";

    }else{
        element.innerHTML = crossIcon;
        anim_playerall.classList.add("anim_change");
        element.classList.add("clicked");
        playerSign = "X";
        element.setAttribute("id",playerSign);
        element.style.color = "red";



    };
    selectWinner();
};




function getIdVal(classname){
    return document.querySelector(".box" + classname).id;
}
function checkIdSign(val1, val2, val3, sign){ 
    if(getIdVal(val1) == sign && getIdVal(val2) == sign && getIdVal(val3) == sign){
        return true;
    }
}
function selectWinner(){ 
    if(checkIdSign(1,2,3,playerSign) || checkIdSign(4,5,6, playerSign) || checkIdSign(7,8,9, playerSign) || checkIdSign(1,4,7, playerSign) || checkIdSign(2,5,8, playerSign) || checkIdSign(3,6,9, playerSign) || checkIdSign(1,5,9, playerSign) || checkIdSign(3,5,7, playerSign)){
        game_over.classList.add("show");
        setTimeout(()=>{ 
            result_box.classList.add("show");
            game_box.classList.remove("show");
        }, 4000); 
        result_text.innerHTML = `Player <p>${playerSign}</p> won`;
    }else{
        if(getIdVal(1) != "" && getIdVal(2) != "" && getIdVal(3) != "" && getIdVal(4) != "" && getIdVal(5) != "" && getIdVal(6) != "" && getIdVal(7) != "" && getIdVal(8) != "" && getIdVal(9) != ""){
            game_over.classList.add("show");
            setTimeout(()=>{ 
                game_box.classList.remove("show");
                result_box.classList.add("show");
                result_text.textContent = "Game has been drawn"; 
                
            }, 4000); 
            
        }
        
    }
}

replay_btn.onclick = ()=>{
    window.location.reload(); //reload the current page on replay button click
}
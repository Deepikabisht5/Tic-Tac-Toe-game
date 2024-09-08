let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;  //Player X, Player 0

//2D Array for winning pattern
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
  
const sound=()=>{
    const audio=  new Audio("sound.mp3");
    audio.play()
}


boxes.forEach((box)=>{
    box.addEventListener("click", sound);
})


    //jab hum box ko click kre toh kuch ho
     boxes.forEach((box) => {
        box.addEventListener("click", () => {
            console.log("box was clicked");           //internally
        
            if (turn0) {
                box.innerText = "0";
                turn0 = false;
            
            }
            else {
                box.innerText = "X";
                turn0 = true;
                
            }                                       //externally - screen pai dikega 0 X bnte hue
           
            box.disabled = true;                   //ik baar jha jo fill kar dia vo aisi rhega 0 se vapas X nhi kr skte
            checkWinner();
        })
    }

    );


const checkWinner = () => {
    for (i of winPatterns) {
        // console.log(i[0],i[1],i[2]);                                //ye sirf winning boxes ko dikhara tha
        // console.log( boxes[i[0]], boxes[i[1]], boxes[i[2]] );       //actual boxes link ho gye.. eg. 1 4 7 click kroge toh dikhega
        let pos1val = boxes[i[0]].innerText;
        let pos2val = boxes[i[1]].innerText;
        let pos3val = boxes[i[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val)
        
            showWinner(pos1val);
        
        }
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, The Winner is ${Winner}`;      //winner hone ke badh upper congrats or new game ka option aaega
    msgContainer.classList.remove("hide");
       disableboxes();                                         // disable ho jae saare button winner aate hi
    };

    const disableboxes=()=>{
        for(let box of boxes){
            box.disabled=true;
        }
    }

    const enableboxes=()=>{
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    }
    
    const resetGame=()=>{
    turn0=true;
    enableboxes();
    msgContainer.classList.add("hide");

}

newGameBtn.addEventListener("click",resetGame);       // chahe reset ho ya new game wala button same action perform hoga
 resetbtn.addEventListener("click",resetGame);

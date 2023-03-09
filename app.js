// setInterval(function(){
//     //code
//     alert("Hello World");
// }, 5000);

let startBtn = document.querySelector("#startBtn");
let stopBtn = document.querySelector("#stopBtn");

let timerDisplay = document.querySelector("#timerDisplay");

let theTimer = 0

let myTimer;

startBtn.addEventListener("click", function(){

    myTimer = setInterval(function(){
        //theTimer++;
        theTimer = theTimer + 1;
        timerDisplay.innerHTML = theTimer;
    }, 1000);    

})

stopBtn.addEventListener("click", function(){
    clearInterval(myTimer)
    timerDisplay.innerHTML = "";
    theTimer = 0;

})




// ourFunction(1,2);

// function ourFunction(a, b) {
//     let a = 2;
//     let b = 1;
//     let c = a + b;
// }

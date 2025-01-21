let display=document.querySelector(".display")
let timer=null;
let startTime=0;
let elapsed=0;
let isRunning=false;

function start(){
    startTime=Date.now()-elapsed;
    timer=setInterval(update,10)
    isRunning=true;
}

function stop(){
    if(isRunning){
        elapsed=Date.now()-startTime;
        clearInterval(timer)
        isRunning=false
    }
}

function reset(){
    startTime=0;
    elapsed=0;
    isRunning=false;
    clearInterval(timer);
    display.textContent="00:00:00:00";
}

function update(){
    let current=Date.now()
    elapsed=current-startTime;
    let hours=Math.floor(elapsed/(1000*60*60))
    let minutes=Math.floor((elapsed/(1000*60)%60))
    let seconds=Math.floor(elapsed/(1000)%60)
    let milliseconds=Math.floor(elapsed%(1000)/10)
    hours=String(hours).padStart(2,"0")
    minutes=String(minutes).padStart(2,"0")
    seconds=String(seconds).padStart(2,"0")
    milliseconds=String(milliseconds).padStart(2,"0")
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
}
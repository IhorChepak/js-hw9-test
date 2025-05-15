const buttonStart = document.querySelector('[data-start]')
const buttonStop = document.querySelector('[data-stop]')
const body = document.querySelector('body')
buttonStop.disabled = true
let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

buttonStart.addEventListener('click', function onClick(evt){
    body.style.backgroundColor= getRandomHexColor()
    buttonStart.disabled=true
    buttonStop.disabled = false
    timer = setInterval(onButtonStart,10)
})


function onButtonStart(){
     body.style.backgroundColor= getRandomHexColor()
}

buttonStop.addEventListener('click', onStop)

function onStop(){
    clearInterval(timer);
    buttonStart.disabled=false;
    buttonStop.disabled=true;
    body.style.backgroundColor='white'
   
}

 

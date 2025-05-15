


// catturo input utente
let inputUser = document.querySelector(`#inputUser`);

// catturo bottoni
let btnPlay = document.querySelector(`#btnPlay`);
let btnPause = document.querySelector(`#btnPause`);
let btnReset = document.querySelector(`#btnReset`);

// catturo output
let timer = document.querySelector(`#timer`);


// variabile d'appoggio
// let counter = inputUser.value;


// algoritmo cronometro

let interval;
let counter;
let residuo = 0;


btnPlay.addEventListener( `click`, ()=>{
    
    clearInterval(interval);
    counter = inputUser.value;
    
    if(residuo !== 0) {
        counter = residuo
    };
    
    interval = setInterval( ()=> {
        
        if ( counter < 0) {
            clearInterval(interval);
            timer.innerHTML = `fine`;
            inputUser.value = ``;
        } else {
            timer.innerHTML = counter;
            counter --;
            residuo = 0;
        }
    } , 1000 );
    
} );



btnPause.addEventListener( `click`, ()=>{
    clearInterval(interval);
    residuo = counter;
    
} );



btnReset.addEventListener( `click`, ()=> {
    inputUser.value = ``;
    clearInterval(interval);
    timer.innerHTML = ``;
        
} );
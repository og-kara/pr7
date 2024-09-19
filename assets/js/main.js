'use strict'

// зд 1

const hideButton = document.getElementById('hideButton');

hideButton.addEventListener('click', () => {
  hideButton.style.display = 'none';
});

// зд 2

const hidetext = document.getElementById('hidetext');
const texthide = document.getElementById('texthide');

hidetext.addEventListener('click', () => {
  texthide.style.display = 'none';
});

// зд 3

const HideText = document.querySelector('.HideText');
const Texthide = document.querySelector('.Texthide');
Texthide.style.display = 'none';

HideText.addEventListener('click', function() {
  if(Texthide.style.display == 'none') Texthide.style.display = 'flex';
  else Texthide.style.display = 'none';
});

// зд4

document.addEventListener('click', (event) => {
  ball.style.left = `${event.clientX - 25}px`;
  ball.style.top = `${event.clientY - 25}px`;
});

// function counter(){
//     for( let i = 0; i<3; i++){
//         alert(i);
//     }
// }

// let btn = document.querySelector('.btn');
// btn.onclick = function(){
//     alert('bobik');
// }

// // btn.onclick = counter;
// // // btn.onclick = null;


// function clickEvent(){
//     alert('Bobik Bobik')
// }

// btn.addEventListener('click',  clickEvent);
// btn.removeEventListener('click', clickEvent);


// btn.addEventListener('Bobik', function(){
//     alert('Bobik Bobik');
// }) 
// btn.removeEventListener('click', function(){
//     alert('Bobik Bobik')
// })

// let btn = document.querySelector('.btn');
// btn.onclick = function(event){
//     // alert(event.type)
//     // alert(event.currentTarget)
//     alert(event.clientX)
//     alert(event.clientY)
// }


const peach = document.querySelector('.peach');
const pipe = document.querySelector('.pipe');


const jump =() => {
    peach.classList.add('jump');

    setTimeout(() => {
        peach.classList.remove('jump'); 
    }, 600);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const peachPosition = +window.getComputedStyle(peach).bottom.replace ('px' , '');

    if (pipePosition <= 120 && pipePosition >0 && peachPosition <80){
      pipe.style.animation ='none';
      pipe.style.left = `${pipePosition}px`;

      peach.style.animation ='none';
      peach.style.bottom = `${peachPosition}px`;

      peach.src ='imagem/game-over.png';
      peach.style.width = '75px'
      peach.style.marginLeft = '20px'


      clearInterval(loop);
    }
}, 10);


document.addEventListener('keydown', jump);
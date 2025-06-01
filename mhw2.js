function apriMenu(){
    const menu = document.querySelector('#menuNascosto');
     menu.classList.toggle('hidden');
     document.body.classList.toggle('no-scroll');
}
const menu = document.querySelector('#menuButton');
menu.addEventListener('click', apriMenu);



function saidipiu(){
    
    const new_p=document.createElement('p');
    new_p.textContent='Il Rolex Datejust è un classico senza tempo, simbolo di eleganza e precisione dal 1945.';

    const dipiu=document.querySelector("#dipiuDateJust");
    dipiu.innerHTML = '';
    dipiu.appendChild(new_p);
}
const dipiu = document.querySelector('#dipiuDateJust');
dipiu.addEventListener('click', saidipiu);


function cambiaImmagine(event) {
  const img = event.currentTarget;
  img.src = img.dataset.hover;
}

function ripristinaImmagine(event) {
  const img = event.currentTarget;
  img.src = img.dataset.originalSrc;
}

const immagini = document.querySelectorAll('.imgRolex');
immagini.forEach(img => {
    img.dataset.originalSrc = img.src;
  img.addEventListener('mouseover', cambiaImmagine);
  img.addEventListener('mouseout', ripristinaImmagine);
});


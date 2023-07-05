const menu = document.querySelector('#menu');

menu.addEventListener('click', () =>{
    const menu=document.querySelector('.menu-mobile');
    menu.classList.add('open');
    console.log(menu);
});

const menuMobile = document.querySelector('.menu-mobile');
const btn = menuMobile.querySelectorAll('a');
console.log(btn);
for(let i=0; i < btn.length ; i++){
    console.log(btn[i]);
    btn[i].addEventListener('click', rOpen);
}

function rOpen(){
    const menu = document.querySelector('.menu-mobile');
    menu.classList.remove('open');
}

const closeBtn=document.querySelector('.close-pop');
closeBtn.addEventListener('click', rOpen);

/* ---------- Pop up ------------ */
const inter = document.querySelectorAll('.content, .bg-perfil, .band-item');
console.log(inter);

function popUp(e) {
    const pop = document.querySelector('.popUp');
    pop.classList.add('open');
    const i = e.target.parentNode.parentNode;
    const name = i.querySelector('.name').textContent;
    const img = i.querySelector('.perfil').src;

    pop.querySelector('#pop-name').innerHTML = name;
    pop.querySelector('#pop-img').src= img;
    pop.querySelector('#pop-band').innerHTML = i.querySelector('.band-group').textContent;
    pop.querySelector('#pop-text').innerHTML = i.querySelector('.i-text').textContent;
    pop.querySelector('#pop-img-band').src = i.querySelector('.hidden').src;
}


for(let i=0; i < inter.length ; i++){
    inter[i].addEventListener('click', popUp);
    console.log(inter[i]);
}




const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  const menu = document.querySelector('.menu-mobile');
  menu.classList.add('open');
});

const menuMobile = document.querySelector('.menu-mobile');
const btn = menuMobile.querySelectorAll('a');
function rOpen() {
  const menu = document.querySelector('.menu-mobile');
  menu.classList.remove('open');
}
for (let i = 0; i < btn.length; i += 1) {
  btn[i].addEventListener('click', rOpen);
}

const closeBtn = document.querySelector('.close-pop');
closeBtn.addEventListener('click', rOpen);

/* ---------- Pop up ------------ */
const inter = document.querySelectorAll('.content, #bg-perfil');

function popUp(e) {
  const pop = document.querySelector('.popUp');
  pop.classList.add('open');
  const i = e.target.parentNode.parentNode;
  const name = i.querySelector('.name').textContent;
  const img = i.querySelector('.perfil').src;

  pop.querySelector('#pop-name').innerHTML = name;
  pop.querySelector('#zoom-in').src = img;
  pop.querySelector('#pop-band').innerHTML = i.querySelector('.band-group').textContent;
  pop.querySelector('#pop-text').innerHTML = i.querySelector('.i-text').textContent;
  pop.querySelector('#zoom-out').src = i.querySelector('.hidden').src;
}

for (let i = 0; i < inter.length; i += 1) {
  inter[i].addEventListener('click', popUp);
}

const zoom = document.querySelector('#zoom-out');
zoom.addEventListener('click', () => {
  const zoomIn = document.querySelector('#zoom-in');
  const aux = zoom.src;
  zoom.src = zoomIn.src;
  zoomIn.src = aux;
});

const closePopUp = document.querySelector('.c-popUp');
closePopUp.addEventListener('click', () => {
  const close = document.querySelector('.popUp');
  close.classList.remove('open');
});

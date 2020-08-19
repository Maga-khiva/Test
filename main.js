let header=document.querySelector('.header');
let hamMenu=document.querySelector('.ham-menu');

window.addEventListener('scroll', function(){
  let windowPosition=window.scrollY>0;
  header.classList.toggle('active', window.scrollY>0);
})

hamMenu.addEventListener('click', function(){
  header.classList.toggle('menu-open');
} )
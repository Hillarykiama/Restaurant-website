 header = document.querySelector('header');
 let menu = document.querySelector('#menu-icon');
 let navbar = letdocument.querySelector('.navbar');


 window.addEventListener('scroll', () => {
     header.classList.toggle('active', window.scrollY > 0);
 });

 menu.onclick = () => {
     navbar.classList.toggle('active');
     b
 }
 window.onscroll = () => {
     navbar.classList.remove('active');
 }
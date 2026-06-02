const toggle=document.getElementById('theme-toggle');

toggle.addEventListener('click',()=>{

document.body.classList.toggle('light');

if(document.body.classList.contains('light')){
toggle.innerHTML='☀️';
}
else{
toggle.innerHTML='🌙';
}

});

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener('click',function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({
behavior:'smooth'
});

});

});

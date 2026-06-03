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

const modal =
document.getElementById("imageModal");

const modalImage =
document.getElementById("modalImage");

window.openModal = function(imageSrc){
    
    modal.style.display = "flex";

    modalImage.src = imageSrc;

}

const closeButton =
document.querySelector(".close-modal");

if(closeButton){

    closeButton.addEventListener("click",()=>{

        modal.style.display="none";

    });

}

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.style.display="none";

    }

});

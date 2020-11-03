$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('nav').addClass("sticky");

        }else{
            $('nav').removeClass("sticky");

        }
    })
    
});






const navSlide= () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{ 
        nav.classList.toggle('nav-active');
         //animatation links
        navLinks.forEach((link,index) => {
            if(link.style.animation){
                 link.style.animation='';
            }else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index/7+0.5}s`;
             }
        
        });

         //burger animation
         burger.classList.toggle('toggle');
    });

   
    
}
navSlide();

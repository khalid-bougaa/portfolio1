//----------------------style switcher-----------------//
const styleSwitcherToggle=document.querySelector('.style-switcher-toggler');
styleSwitcherToggle.addEventListener('click',()=>{
    document.querySelector(".style-switcher").classList.toggle("open");
})
//----------------------style switcher-----------------//
// hide style switcher on scroll
window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open")

    }
})

/*---------------Theme colors-------------------*/
 const alternateStyles = document.querySelectorAll(".color-style");
function setActiveStyle(color){
    alternateStyles.forEach((style)=>{
         if(color === style.getAttribute("title")){
             style.removeAttribute("disabled")
             
         }else{
            style.setAttribute("disabled",'true');
            
         }
    })
    
}

const color2=document.getElementById('image');
const bg=document.querySelector('.imagec');

function chenge1(){
    color2.src="photo/program.svg";
    
    
}
function chenge2(){
    color2.src="photo/st1.svg"
}
function chenge3(){
    color2.src="photo/st2.svg"
}
/*--------------- Back to Top------start---*/
let btn = document.getElementById('bntt') ;
let flish = document.querySelector('#down')
    window.onscroll = function(){
        if(scrollY >= 100){
            btn.style.display = 'block';
            flish.style.display = 'none'
        } 
        else{
    btn.style.display = 'none';
    flish.style.display = 'block' }
}
    btn.onclick = function(){
        scroll({
            left :0,
            top : 0,
            behavior :"smooth"
            
    
            
        })}
/*--------------- Back to Top------End---*/

let function1=document.querySelector('.function1')
let function2=document.querySelector('.function2')
// let after=document.querySelector('.after')














function myFunction() {
   this.classList.toggle("after");
   this.classList.toggle("lok")
}


function1.addEventListener("click", myFunction)
function2.addEventListener("click", myFunction)

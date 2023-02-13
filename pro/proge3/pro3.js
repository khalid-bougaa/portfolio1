 let btn = document.getElementById('finich') ;
let header = document.getElementById('header') ;

let z1 = document.getElementById('z1') ;
let z2 = document.getElementById('z2') ;
let z3 = document.getElementById('z3') ;
let z4 = document.getElementById('z4') ;
let z5 = document.getElementById('z5') ;
let z6 = document.getElementById('z6') ;
let z7 = document.getElementById('z7') ;
let z8 = document.getElementById('z8') ;















   window.onscroll = function(){
        if(scrollY >= 670){
            btn.style.display = 'block';
            z1.style.color ='#000'
            z2.style.color ='#000'
         
            z4.style.color ='#000'
            z5.style.color ='#000'
            z6.style.color ='#000'
            z7.style.color ='#000'
            z8.style.color ='#000'
           
            
            logo.src='images/logo.webp';
            header.style.background = '#fff'
        }
        else{
             btn.style.display = 'none';
             logo.src='images/logo-alt.webp';
             header.style.background = '';
            z1.style.color =''
             z2.style.color =''
             z4.style.color =''
             z5.style.color =''
             z6.style.color =''
             z7.style.color =''
             z8.style.color =''
             

            }
        }


     btn.onclick = function(){
        scroll({
            left :0,
            top : 0,
            behavior :"smooth"
            
        })
       
    }



 

   
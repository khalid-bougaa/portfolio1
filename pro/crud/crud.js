let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let total = document.getElementById('total')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')
let mood = 'create';
let tmp ;

//console.log(title,price,taxes,ads,discount,total,count,category,submit)

//-----------------get total-----------------
   function getTolal()
   {
    if(price.value !=''){
        let resul = (+price.value + +taxes.value + +ads.value)+ +discount.value ;
        total.innerHTML = resul ;
        total.style.background ='#040'
    }else{
        total.innerHTML = '' ;
        total.style.background ='#a00d02'

    }
   }







//--------------create product------------------
let dataPro ;

if(localStorage.prodct != null){
    dataPro = JSON.parse(localStorage.prodct)
}else{
    dataPro =[] ;
}

 





submit.onclick = function(){
    let newPro ={
        title      : title.value.toLowerCase()    ,
        price      : price.value                  ,
        taxes      : taxes.value                  ,
        ads        : ads.value                    ,
        discount   : discount.value               ,
        total      : total.innerHTML              ,
        count      : count.value                  ,
        category   : category.value.toLowerCase() ,
        
    }
     
    
        //--------------------count------------------------
      if(title.value != ''
      && price.value != ''
      && newPro.count < 100)           //------clean data--------------
      { if(mood === 'create'){
        if(newPro.count > 1 ){
          for ( let i = 0; i < newPro.count ;i++){
            dataPro.push(newPro) ;
          } 
          
          
        }else{
          dataPro.push(newPro) ;
        } 
      }else{
        dataPro[  tmp ] = newPro;
        mood = 'create' ;
        submit.innerHTML = 'create' ;
        count.style.display = 'block'
    }clearData()
    
    }
       
    
       
       
        
     
     //--------------save locelstorage---------------------
     
     
    localStorage.setItem('prodct',   JSON.stringify(dataPro)    )
    
    clearData()
    showData()

  
  }
      

showData()
//localStorage.clear()



//-----------------clear inputs---------------------
  function clearData(){
    title.value = ''     ;
    price.value = ''     ;
    taxes.value = ''     ;
    ads.value = ''       ;
    discount.value = ''  ;
    total.innerHTML = '' ;
    count.value = ''     ;
    category.value = ''  ;
   

  }

//---------------------read---------------------------
  function showData(){
    getTolal()
    let table = '' ;
     for( let i = 0 ;i < dataPro.length;i++){
       table += `
       <tr>
         <td>${i+1}</td>
         <td>${dataPro[i].title}</td>
         <td>${dataPro[i].price}</td>
         <td>${dataPro[i].taxes}</td>
         <td>${dataPro[i].ads}</td>
         <td>${dataPro[i].discount}</td>
         <td>${dataPro[i].total}</td>
         <td>${dataPro[i].category}</td>
         <td>   <button onclick = 'updateData( ${i} )'class="update"> update </button>   </td>
         <td>   <button  onclick ="deleData( ${i} )" class="delete"> delete </button>   </td>
   
       </tr>
         `;
       
     }

    document.getElementById('tbody').innerHTML = table ;
     let btnDelete = document.getElementById('deleteAll') ;
    if(dataPro.length > 0){
      btnDelete.innerHTML =`
      <button onclick = 'deleAll()' > delete All(${dataPro.length}) </button> 
      `

    }else{
      btnDelete.innerHTML = '' ;
    }



  }
  showData()








//-------------------delete--------------------
  function deleData(i){
    dataPro.splice(i,1) ;
    localStorage.prodct = JSON.stringify(dataPro) ;
    showData()

     

  }
  function deleAll(){
  localStorage.clear() ;
  dataPro.splice(0) ;
  showData()
 }



//-------------------update------------------

function updateData(i){
  title.value = dataPro[i].title;
  price.value = dataPro[i].price;
  ads.value   = dataPro[i].ads;
  taxes.value = dataPro[i].taxes;
  getTolal()        ;
  count.style.display = 'none'
  discount.value = dataPro[i].discount;
  category.value = dataPro[i].category;
  submit.innerHTML ='update';
  mood = 'update'
  tmp = i ;
  scroll({
    top :0 , 
    behavior : 'smooth'
  })
}






//-------------------search---------------
let searchMood = 'title';
let search = document.getElementById('search');
function getSearchMood(id)
{
  if (id == 'searchTitle'){
    searchMood = 'title';
    //search.placeholder = 'search by title';
  }else{
    searchMood = 'category';
    //search.placeholder = 'search by category';
  }
  search.placeholder = 'search by '+searchMood ;
  search.focus();
  search.value = '';
    showData();

}

    //---search data---//
   function searchData(value)
 {
  let table = '  ';
  if( searchMood == 'title')
  {
    for(let i =0 ; i < dataPro.length;i++){
      if(dataPro[i].title.includes(  value.toLowerCase() )){
        table += `
       <tr>
         <td>${i}</td>
         <td>${dataPro[i].title}</td>
         <td>${dataPro[i].price}</td>
         <td>${dataPro[i].taxes}</td>
         <td>${dataPro[i].ads}</td>
         <td>${dataPro[i].discount}</td>
         <td>${dataPro[i].total}</td>
         <td>${dataPro[i].category}</td>
         <td>   <button onclick = 'updateData( ${i} )'class="update"> update </button>   </td>
         <td>   <button  onclick ="deleData( ${i} )" class="delete"> delete </button>   </td>
   
       </tr>
         `;
      }
    }
  }

  else{

    for(let i =0 ; i < dataPro.length;i++){
      if(dataPro[i].category.includes(value)){
        table += `
       <tr>
         <td>${i}</td>
         <td>${dataPro[i].title}</td>
         <td>${dataPro[i].price}</td>
         <td>${dataPro[i].taxes}</td>
         <td>${dataPro[i].ads}</td>
         <td>${dataPro[i].discount}</td>
         <td>${dataPro[i].total}</td>
         <td>${dataPro[i].category}</td>
         <td>   <button onclick = 'updateData( ${i} )'class="update"> update </button>   </td>
         <td>   <button  onclick ="deleData( ${i} )" class="delete"> delete </button>   </td>
   
       </tr>
         `;
      }
    }

  }


  document.getElementById('tbody').innerHTML = table ;
 }







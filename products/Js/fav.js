
get()
setInterval(cartnum,10)
setInterval(favnum,10)

// setInterval(footerposition,1)



function addchart2(e){

    let targettype=e.parentElement.parentElement.querySelector('.card-title').innerHTML;
    let targetprize=e.parentElement.parentElement.querySelector('.list-group-item').innerHTML;
    if(JSON.parse(localStorage.getItem('order'))==undefined){
      let arr3=[]
      arr3.push([targettype,targetprize]);
      localStorage.setItem('order',JSON.stringify(arr3))
      favnum()
    }else{
      let arr2=JSON.parse(localStorage.getItem('order'));
      arr2.some(check);
      function check(s) {
        return s.includes(targettype);
      }
      console.log(arr2.some(check))
      if(arr2.some(check)){
        Swal.fire(
          'already added',
          'this product already in your chart',
          'warning'
        )
      }else{
      arr2.push([targettype,targetprize]);
      localStorage.setItem('order',JSON.stringify(arr2))
      cartnum()
      }
  }
 let  target=e.parentElement.parentElement;
 e.parentElement.parentElement.querySelector('.buttton').innerHTML='+ADDED'
  
}


function removecart(t){
  
  target= t.parentElement.parentElement.querySelector('.card-title').innerHTML;
  console.log(target)
  let check_arr=JSON.parse(localStorage.getItem('order'));
  check_arr.some(check);
  function check(e){
    if(e.includes(target)){
      index=check_arr.indexOf(e);
      check_arr.splice(index,1)
      localStorage.setItem('order',JSON.stringify(check_arr))
  }
}
let  target2=t.parentElement.parentElement;
target2.style["background-color"] = "white"
t.parentElement.parentElement.querySelector('.buttton').innerHTML='+Add to chart'
}





function cartnum(){
  if(localStorage.getItem('order')){
  let cartorder=JSON.parse(localStorage.getItem('order'))
  $('.nav-link.cart').attr('data-before',cartorder.length)
}
}
function favnum(){
  if(JSON.parse(localStorage.getItem('favourite')) || JSON.parse(localStorage.getItem('favourite'))===[]){
  let favnumber=JSON.parse(localStorage.getItem('favourite'))
  $('.nav-link.fav').attr('data-before',favnumber.length);
}
}

function get(){
let arrayfav=JSON.parse(localStorage.getItem('favourite'));
if(localStorage.getItem('favourite')){
    for(let i=0;i<arrayfav.length;i++){
      if(document.querySelector('.row').innerHTML.includes(arrayfav[i])==false){
        document.querySelector('.row').innerHTML+=`<div class="col-xl-4 col-lg-6 col-sm-6 mb-5 ">${arrayfav[i]}</div>`
      }
    }
  }
}


function removing(e){
if(e.classList.contains('fa-solid')==true){
              if(localStorage.getItem('favourite')!==undefined || JSON.parse(localStorage.getItem('favourite'))===[ ] ){
              let favarr=JSON.parse(localStorage.getItem('favourite'));
              e.classList.remove("fa-solid");
              e.className='fa-regular fa-heart icon';
              e.parentElement.parentElement.parentElement.parentElement.remove();
              index=favarr.indexOf(e.parentElement.parentElement.parentElement.parentElement);
              favarr.splice(index,1);
              localStorage.setItem('favourite',JSON.stringify (favarr));
              
            }
      }
      
}

function footerposition(){
 
  if(document.querySelector('.row').innerHTML.includes('col-xl-4')==false){
   
    $('footer').css({"position":"fixed", "background-color": "white","bottom":"0", "height": "fit-content", "width": "100%"})
   
  }else if(document.querySelector('.row').innerHTML.includes('col-xl-4')==true){
    
    $('footer').css({"position":"relative", "background-color": "white","bottom":"0", "height": "fit-content", "width": "100%"})
  }
}


function loading(){
  let keys=document.querySelectorAll('.card-title');
   let check_arr=JSON.parse(localStorage.getItem('order'));
   
  for(let i=0;i<keys.length;i++){
    check_arr.some(check);
    function check(e){
      if(e.includes(keys[i].innerHTML)){
        console.log(keys[i].innerHTML)
        
        keys[i].parentElement.parentElement.querySelector('.buttton').innerHTML='ADDED'
        
    }
  }
}
}

 



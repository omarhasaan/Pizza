let products=document.querySelectorAll('.card-title');
let row=document.querySelectorAll('.row');
let main=document.querySelector('.section0').innerHTML;

setInterval(cartnum,10)

setInterval(favnum,10)
loading()
setInterval(footerposition,10)
let icon=document.querySelectorAll('.icon')

for(let i=0;i<icon.length;i++){
   
    icon[i].addEventListener('click',get)
    function get(){
    target1=icon[i].parentElement.parentElement.parentElement.parentElement ;
    if(icon[i].classList.contains('fa-regular')==true){
            icon[i].classList.remove("fa-regular");
            icon[i].className='fa-solid fa-heart icon';
            if(JSON.parse(localStorage.getItem('favourite'))==undefined){
              let arr3=[]
              arr3.push(target1.innerHTML)
              localStorage.setItem('favourite',JSON.stringify(arr3))
              favnum()
            }else{
              let arr2=JSON.parse(localStorage.getItem('favourite'))
              
              if(arr2.includes(target1.innerHTML)){
                
                Swal.fire(
                  'already added',
                  'this product already in your favouriates',
                  'warning'
                )
                icon[i].className='fa-regular fa-heart icon';
                icon[i].classList.remove("fa-solid");
              }else{
              
              arr2.push(target1.innerHTML)
              localStorage.setItem('favourite',JSON.stringify(arr2))
              favnum()
              }
            }

    }else {
        icon[i].className='fa-regular fa-heart icon';
        icon[i].classList.remove("fa-solid");
        let arr2=JSON.parse(localStorage.getItem('favourite'));
        index=arr2.indexOf(target1);
        arr2.splice(index,1);
        console.log(index)
        if(index==-1){
          localStorage.removeItem('favourite')
          favnum()
        }else;{
          localStorage.setItem('favourite',JSON.stringify(arr2))
          favnum()
        }

    }
    }

}


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
        'this product already in your cart',
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



function cartnum(){
  if(localStorage.getItem('order')){
  let cartorder=JSON.parse(localStorage.getItem('order'))
  $('.nav-link.cart').attr('data-before',cartorder.length)
}
}
function favnum(){
  if(JSON.parse(localStorage.getItem('favourite'))){
  let favnumber=JSON.parse(localStorage.getItem('favourite'))
  $('.nav-link.fav').attr('data-before',favnumber.length);
}
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

function loading(){
  let keys=document.querySelectorAll('.card-title');
   let check_arr=JSON.parse(localStorage.getItem('order'));
   
  for(let i=0;i<keys.length;i++){
    check_arr.some(check);
    function check(e){
      if(e.includes(keys[i].innerHTML)){
       
        
        keys[i].parentElement.parentElement.querySelector('.buttton').innerHTML='ADDED'
        
    }
  }
}
}


$('.search').click(function(){
  $('.search_feild').slideToggle("slow");
})

$('.se').keyup(function(){
  let row=document.querySelectorAll('.row')
  for(let i=0;i<row.length;i++){
    row[i].innerHTML=' '
  }
  
  for(let i=0;i<products.length;i++){
    value=products[i].innerHTML.toLowerCase()
    if(value.includes($('.se').val())){
      row1=document.querySelector('.row1');
      row1.innerHTML+=`
      <div class="col-xl-4 col-lg-6 col-sm-6 mb-5 ">
      ${products[i].parentElement.parentElement.parentElement.innerHTML}
      </div>`;
      
    }else if($('.se').val().trim() == ' '){
      
     $('.section0').html(main)
    }
  } 
})

function footerposition(){
 
  if(document.querySelector('.row').innerHTML.includes('col-xl-4')==false){
   
    $('footer').css({"position":"fixed", "background-color": "white","bottom":"0", "height": "fit-content", "width": "100%"})
   
  }else if(document.querySelector('.row').innerHTML.includes('col-xl-4')==true){
    
    $('footer').css({"position":"relative", "background-color": "white","bottom":"0", "height": "fit-content", "width": "100%"})
  }
}

function removing(){

}













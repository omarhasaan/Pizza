
  

setInterval(cartnum,10)
setInterval(favnum,10)
setInterval(addchart,10)
get()









function addchart(){
    items = document.querySelectorAll(".buttton");//Get items
  items.forEach(function(item){
    item.addEventListener('click',function(){
      let target=item.parentElement.parentElement.parentElement;
      let targetimg=item.parentElement.parentElement.querySelector('.card-title').innerHTML;
      if(JSON.parse(localStorage.getItem('order'))==undefined){
        let arr3=[]
        arr3.push(target.innerHTML)
        localStorage.setItem('order',JSON.stringify(arr3))
        favnum()
      }else{
        let arr2=JSON.parse(localStorage.getItem('order'));
        arr2.some(check);
        function check(e) {
          return e.includes(targetimg);
        }
        console.log(arr2.some(check))
        if(arr2.some(check)){

          Swal.fire(
            'The Internet?',
            'this product already in your cart',
            'question'
          )
        }else{
        arr2.push(target.innerHTML)
        localStorage.setItem('order',JSON.stringify(arr2))
        cartnum()
        }
    }
    
  }) })
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

function get(){
let arrayorder=JSON.parse(localStorage.getItem('order'));
if(localStorage.getItem('order')){
    for(let i=0;i<arrayorder.length;i++){
      if(document.querySelector('.table').innerHTML.includes(arrayorder[i])==false){
        document.querySelector('.table').innerHTML+=
        `<tr><td class='name_product'>${arrayorder[i][0]}</td><td class=' d-flex justify-content-between align-items-center'><span class='prize'>${arrayorder[i][1]}</span>
    
        
        <div class="form-floating" >
        <div class="qty mt-3">
        <span class="minus " onclick=minus(this)>-</span>
        <input type="text" class="count" name="qty" value="1" readonly>
        <span class="plus " onclick=plus(this)>+</span>
    </div>
       </div> 
        </td>
       
        `
      }
    }
  }
}
$('.ordernow').click(function(){
  arr_ordernow=[];
  let prod_name=document.querySelectorAll('.name_product');
  let prod_number=document.querySelectorAll('.count');
  for(let i=0;i<prod_name.length;i++){
  if(prod_number[i].value !==''){
  if(( /^[a-zA-Z][a-zA-Z]+$/ig).test($('.name').val())==true){
  if((/[0-9]{12}/).test($('.Credit').val())==true){
  arr_ordernow.push([prod_name[i].innerHTML,prod_number[i].value])
  arr_ordernow.push(['credit',$('.credit').val()])
  localStorage.setItem(`${$('.name').val()} order`,JSON.stringify(arr_ordernow))

  Swal.fire(
    'your order was added',
    ``,
    'success'
  )
  
}else{
  
  Swal.fire(
    'your credit number is wrong',
    ``,
    'error'
  )
}
}else{
  Swal.fire(
    'please enter your name',
    ``,
    'error'
  )
}
}else{
  
  Swal.fire(
    `please enter number of ${prod_name[i].innerHTML}`,
    ``,
    'warning'
  )
   break;
}
}
})





function plus(e){
  let key=$(e).siblings(".count").val()
  
  let element=e.parentElement.parentElement.parentElement;


 $(e).siblings(".count").val(parseInt( $(e).siblings(".count").val()) + 1 )
 if($(e).siblings('.count').val()==2){
  element.firstChild.innerHTML=("$"+( element.firstChild.innerHTML.replace('$','')*$(e).siblings('.count').val()));
 }else{
  element.firstChild.innerHTML=("$"+( element.firstChild.innerHTML.replace('$','')*$(e).siblings('.count').val())/key)
 }
 
}

function minus(e){
  
  let key=$(e).siblings(".count").val();
  let element=e.parentElement.parentElement.parentElement;
  $(e).siblings(".count").val(parseInt( $(e).siblings(".count").val()) - 1 );
      if ($(e).siblings(".count").val() == 0) {
        $(e).siblings(".count").val(1)   
    }
    if($(e).siblings('.count').val()==1){
      element.firstChild.innerHTML=("$"+( element.firstChild.innerHTML.replace('$','')/key)*$(e).siblings(".count").val())
     }else{
      element.firstChild.innerHTML=("$"+( element.firstChild.innerHTML.replace('$','')/key)*$(e).siblings(".count").val())
     }
      }


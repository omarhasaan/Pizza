favnum()
cartnum()
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

let button=document.querySelector('.button_form');
let massege=document.querySelector('.massege');
let email=document.querySelector('.email')
button.addEventListener('click',get)
  
function get(){
  
  Email.send({
    SecureToken : "86C7A881CEFBA45DD415645A53865A069FDB",
    To : btoa(email.value),
    From : "mohameedhasaan098@gmail.com",
    Subject : "form-floating",
    Body :atob(massege.value)
}).then(
  message => alert(message)
);
}


 
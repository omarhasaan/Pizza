
cartnum()
favnum()
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


//   $('.card-img-top').hover(function(){
//     $('.imaghover1').css({'display':'none'})
//     $('.changeimg').css({'display':'block'})
//   })




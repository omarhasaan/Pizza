let arr1=[];
$('.sumbit').click(function(){
    if(( /^[a-zA-Z][a-zA-Z]+$/ig).test($('.name').val())==true){
    if(( /^[^0-9]\w{2,}/).test($('.username').val())==true){
        if((/^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*_]{8,}$/).test($('.pass').val())==true){
        if((/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test($('.email').val())==true){
          if(!JSON.parse(localStorage.getItem('usersname')).includes($('.username').val())){
            if(!JSON.parse(localStorage.getItem('password')).includes($('.pass').val())){
                      if(localStorage.getItem('usersname')==undefined){
                        let arr3=[];
                        arr3.push($('.username').val())
                        localStorage.setItem('usersname',JSON.stringify(arr3));
                      }else{
                      let arr2= JSON.parse(localStorage.getItem('usersname'));
                      arr2.push($('.username').val())
                      localStorage.setItem('usersname',JSON.stringify(arr2));
                      }

                      if(localStorage.getItem('password')==undefined){
                        let arr3=[];
                        arr3.push($('.pass').val())
                        localStorage.setItem('password',JSON.stringify(arr3));
                      }else{
                      let arr2= JSON.parse(localStorage.getItem('password'));
                      arr2.push($('.pass').val())
                      localStorage.setItem('password',JSON.stringify(arr2));
                      }
                  window.location.href='file:///C:/Users/top/Downloads/task16.3/tasks%D8%B9%D9%85%D8%B1%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%AD%D8%B3%D8%A7%D9%86/mahmoud_elgezay%20tasks/formtask/login.html'
                }else{
                  $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
                       password is used already
                         </div>
                       `)
                }
          }else{
            $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
                 username is used already
                   </div>
                 `)
          }

}else if($('.email').val()==''){
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
    email empty
  </div>
`)
}
else if((/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test($('.email').val())==false) {
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
    this email is not correct
  </div>
`)
}
}
else if($('.pass').val()==''){
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
    password empty
  </div>
`)
}else if((/[a-zA-Z0-9!@#$%^&*+_]{8,}/g).test($('.pass').val())==false){
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
     your password must have at least a 8 characters 
  </div>
`)
}else if((/^(?=.*[0-9])(?=.*[!@#$%^&*_])$/).test($('.pass').val())==false){
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
    your password must have at least a one of special charachter and one number
  </div>
`)
}else if((/^[A-Z]$/g).test($('.pass').val())==false){
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
    your password must have at least a one of special charachter and one number
  </div>
`)
}
}
else if($('.username').val()==''){
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
    username empty
  </div>
`)
}else{
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
    this username is less than two characters 
  </div>
`)
}

    }else if($('.name').val()==''){
        $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
        name empty
      </div>
`)
    }else if(( /^[a-zA-Z][a-zA-Z]+$/ig).test($('.name').val())==false){
        $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
       your name less than two charachter or contain a number
      </div>
`)
}


$('.name').focus()
})

$('.login').click(function(){
  window.location.href='file:///C:/Users/top/Downloads/task16.3/tasks%D8%B9%D9%85%D8%B1%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%AD%D8%B3%D8%A7%D9%86/mahmoud_elgezay%20tasks/formtask/login.html'
})

document.querySelector('.name').onkeyup=()=>{
   for(let i=0;i<$('.name').val().length;i++){
    if(( /^[a-zA-Z][a-zA-Z]+$/ig).test($('.name').val())==false){
        $('.name').css('border','1px solid red');
    }else{
        $('.name').css('border',"1px solid #ced4da");
    }
   }

}

document.querySelector('.username').onkeyup=()=>{
    for(let i=0;i<$('.username').val().length;i++){
     if((  /^[^0-9]\w{2,}/).test($('.username').val())==false){
         $('.username').css('border','1px solid red');
     }else{
         $('.username').css('border',"1px solid #ced4da");
     }
    }
 
 }
 document.querySelector('.pass').onkeyup=()=>{
    for(let i=0;i<$('.pass').val().length;i++){
     if((  /^(?=.*[0-9])(?=.*[!@#$%^&*_])[a-zA-Z0-9!@#$%^&*+_]{8,}$/).test($('.pass').val())==false){
         $('.pass').css('border','1px solid red');
     }else{
         $('.pass').css('border',"1px solid #ced4da");
     }
    }
 
 }

 document.querySelector('.email').onkeyup=()=>{
    for(let i=0;i<$('.email').val().length;i++){
     if(( /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).test($('.email').val())==false){
         $('.email').css('border','1px solid red');
     }else{
         $('.email').css('border',"1px solid #ced4da");
     }
    }
 
 }

 $('.fa-eye-slash').click(function(){
  $('.fa-eye-slash').toggleClass("active");
  $('.fa-eye').toggleClass("active");
  document.querySelector('.pass').type = 'text';
 })

 $('.fa-eye').click(function(){
  $('.fa-eye-slash').toggleClass("active");
  $('.fa-eye').toggleClass("active");
  document.querySelector('.pass').type = 'password';
 })






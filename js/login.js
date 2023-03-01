
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

$('.login').click(function(){
    if(JSON.parse(localStorage.getItem('usersname')).includes($('.username').val())&&JSON.parse(localStorage.getItem('password')).includes($('.pass').val())){
        localStorage.setItem('currentuser',$('.username').val())
        $('.main2').html(`<div class="alert alert-success text-center" role="alert">
        success
      </div>
      
`)
window.location.href='file:///C:/Users/top/Downloads/task16.3/tasks%D8%B9%D9%85%D8%B1%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%AD%D8%B3%D8%A7%D9%86/mahmoud_elgezay%20tasks/formtask/home.html'
        }else{
           
            
            $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
        wrong user name or password
      </div>
      
`)
setTimeout(() => {
    $('.main2').html(``) 
}, 2000);
            
        }   
})






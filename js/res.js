
let date=new Date().toJSON().split("T")[0];
settable_local()
set()


$('.reserve').click(function(){
    
    if(( /^[a-zA-Z][a-zA-Z]+$/ig).test($('.name').val())==true){
        if($('.time').val()){
            if($('.date').val() && $('.date').val()>date){
                if((/[0-9]{12}/).test($('.Credit').val())==true){
                 
                    let arr=["1","2","3","4","5","6","7"]
                    if(arr.includes($('.tablenumber').val())){
                        let user= localStorage.getItem('currentuser');
                    
                       
                       if( localStorage.getItem(`${user}`)==undefined){
                       localStorage.setItem(`${user}`,JSON.stringify([$('.name').val(),$('.time').val(),$('.date').val(),$('.Credit').val(),$('.tablenumber').val()]))
                    }else{
                        let arraydate=JSON.parse(localStorage.getItem(`${user}`))
                        if(JSON.parse(localStorage.getItem(`${user}`)).includes($('.tablenumber').val())==false ){

                        if(Object.keys(localStorage).includes(user) && arraydate[2]==$('.date').val()){
                        let arr2= JSON.parse(localStorage.getItem(`${user}`));
                        arr2.push($('.tablenumber').val())
                        localStorage.setItem(`${user}`,JSON.stringify(arr2));

                    }else{
                        if( localStorage.getItem(`${user}secandreservation`)==undefined){
                        localStorage.setItem(`${user}secandreservation`,JSON.stringify([$('.name').val(),$('.time').val(),$('.date').val(),$('.Credit').val(),$('.tablenumber').val()]))
                        }else{
                            let arraydate2=JSON.parse(localStorage.getItem(`${user}secandreservation`));
                            if(JSON.parse(localStorage.getItem(`${user}secandreservation`)).includes($('.tablenumber').val())==false){}
                            if(Object.keys(localStorage).includes(user+'secandreservation') && arraydate2[2]==$('.date').val()){
                                let arr3= JSON.parse(localStorage.getItem(`${user}secandreservation`));
                                arr3.push($('.tablenumber').val())  
                                localStorage.setItem(`${user}secandreservation`,JSON.stringify(arr3));
                                 }

                            }
                        }
                        }
                    }
                            if(localStorage.getItem('bookingtable')==undefined){
                                let arr3=[];
                                arr3.push($('.tablenumber').val())
                                localStorage.setItem('bookingtable',JSON.stringify(arr3));
                                if($('.tablenumber').val()==1){
                                    $('.T1').text('booked')
                                }else if($('.tablenumber').val()==2){
                                    $('.T2').text('booked')
                                }else if($('.tablenumber').val()==3){
                                    $('.T3').text('booked')
                                }else if($('.tablenumber').val()==4){
                                    $('.T4').text('booked')
                                }else if($('.tablenumber').val()==5){
                                    $('.T5').text('booked')
                                }else if($('.tablenumber').val()==6){
                                    $('.T6').text('booked')
                                }else if($('.tablenumber').val()==7){
                                    $('.T7').text('booked')
                                }
                              }else{
                                    
                                    if(JSON.parse(localStorage.getItem('bookingtable')).includes($('.tablenumber').val())==false){
                                        let arr2= JSON.parse(localStorage.getItem('bookingtable'));
                                        arr2.push($('.tablenumber').val())
                                            localStorage.setItem('bookingtable',JSON.stringify(arr2));
                                            if($('.tablenumber').val()==1){
                                                $('.T1').text('booked')
                                            }else if($('.tablenumber').val()==2){
                                                $('.T2').text('booked')
                                            }else if($('.tablenumber').val()==3){
                                                $('.T3').text('booked')
                                            }else if($('.tablenumber').val()==4){
                                                $('.T4').text('booked')
                                            }else if($('.tablenumber').val()==5){
                                                $('.T5').text('booked')
                                            }else if($('.tablenumber').val()==6){
                                                $('.T6').text('booked')
                                            }else if($('.tablenumber').val()==7){
                                                $('.T7').text('booked')
                                            }
                                           
                                                $('.main2').html(`<div class="alert alert-success text-center" role="alert">
                                              success
                                               </div>
                                                     `) 
                                                setTimeout(() => {
                                                    $('.main2').html(``) 
                                                }, 2000);
                                                $('.resname').text(JSON.parse(localStorage.getItem(`${user}`))[0]);
                                                $('.restime').text(JSON.parse(localStorage.getItem(`${user}`))[1]);
                                                $('.resdate').text(JSON.parse(localStorage.getItem(`${user}`))[2]);
                                                $('.restable').text(JSON.parse(localStorage.getItem(`${user}`)).splice(4));

                                                $('.name').text(JSON.parse(localStorage.getItem(`${user}`))[0]);
                                                $('.time').text(JSON.parse(localStorage.getItem(`${user}`))[1]);
                                                $('.date').text(JSON.parse(localStorage.getItem(`${user}`))[2]);
                                                $('.table_res').text(JSON.parse(localStorage.getItem(`${user}`)).splice(4));

                                                $('.resname2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[0]);
                                                $('.restime2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[1]);
                                                $('.resdate2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[2]);
                                                $('.restable2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`)).splice(4));

                                                $('.name2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[0]);
                                                $('.time2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[1]);
                                                $('.date2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[2]);
                                                $('.table2_res').text(JSON.parse(localStorage.getItem(`${user}secandreservation`)).splice(4));

                                                
                                          

                                            
                                        }

                                     else{
                                        alert("it's already booked")
                                    }
                                    
                                }       

                              
                   
                }else{
                    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
                      please enter the table you want 
                         </div>
                       `)
                       }
                
            }else{
                $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
                  your credit number is wrong or empty
                     </div>
                   `)
                   }
        }else{
            $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
                  date field is empty or your date is gone
                     </div>
                   `)
        }
    }else{
        $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
                  set time please
                     </div>
                   `)
    }

}else{
    $('.main2').html(`<div class="alert alert-danger text-center" role="alert">
    name is empty or contain number or special ch
       </div>
     `)
   
}
})
function set(){
    let  user=localStorage.getItem('currentuser')
    let  restables=JSON.parse(localStorage.getItem('bookingtable'))
    for(let i=0;i<restables.length;i++){
        
        if(restables[i]==1){
            $('.T1').text('booked')
        }else if(restables[i]==2){
            $('.T2').text('booked')
        }else if(restables[i]==3){
            $('.T3').text('booked')
        }else if(restables[i]==4){
            $('.T4').text('booked')
        }else if(restables[i]==5){
            $('.T5').text('booked')
        }else if(restables[i]==6){
            $('.T6').text('booked')
        }else if(restables[i]==7){
            $('.T7').text('booked')
        }
    
        
    }
    if(JSON.parse(localStorage.getItem(`${user}`))){
        console.log(JSON.parse(localStorage.getItem(`${user}`))[2])

        
                                                $('.resname').text(JSON.parse(localStorage.getItem(`${user}`))[0]);
                                                $('.restime').text(JSON.parse(localStorage.getItem(`${user}`))[1]);
                                                $('.resdate').text(JSON.parse(localStorage.getItem(`${user}`))[2]);
                                                $('.restable').text(JSON.parse(localStorage.getItem(`${user}`)).splice(4));  

                                                $('.name').text(JSON.parse(localStorage.getItem(`${user}`))[0]);
                                                $('.time').text(JSON.parse(localStorage.getItem(`${user}`))[1]);
                                                $('.date').text(JSON.parse(localStorage.getItem(`${user}`))[2]);
                                                $('.table_res').text(JSON.parse(localStorage.getItem(`${user}`)).splice(4));

                                                if(JSON.parse(localStorage.getItem(`${user}secandreservation`))){
                                                $('.resname2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[0]);
                                                $('.restime2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[1]);
                                                $('.resdate2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[2]);
                                                $('.restable2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`)).splice(4));

                                                $('.name2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[0]);
                                                $('.time2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[1]);
                                                $('.date2').text(JSON.parse(localStorage.getItem(`${user}secandreservation`))[2]);
                                                $('.table2_res').text(JSON.parse(localStorage.getItem(`${user}secandreservation`)).splice(4));

                                            }
    }
    if(localStorage.getItem(`${user}`)){
    if(JSON.parse(localStorage.getItem(`${user}`))[2]<date){
        localStorage.removeItem(`${user}`);
       
        
         }
    }
}
// ?في ارور ابن وسخة هنا 
$('.cancel').click(function(){
    let  user=localStorage.getItem('currentuser');
    let currentuser=JSON.parse(localStorage.getItem(`${user}`))
   
    let tables=JSON.parse(localStorage.getItem('bookingtable'))
    let arr=JSON.parse(localStorage.getItem('bookingtable'));
    for(let i=0;i<arr.length;i++){
        if(currentuser.includes(arr[i])){
            if(arr[i]==1){
                $('.T1').text('T1')
            }
            else if(arr[i]==2){
                $('.T2').text('T2')
            }else if(arr[i]==3){
                $('.T3').text('T3')
            }else if(arr[i]==4){
                $('.T4').text('T4')
            }else if(arr[i]==5){
                $('.T5').text('T5')
            }else if(arr[i]==6){
                $('.T6').text('T6')
            }else if(arr[i]==7){
                $('.T7').text('T7')
            }
            let myindex=tables.indexOf(tables[i]);
           
            tables.splice(myindex,1);
            localStorage.setItem('bookingtable',JSON.stringify(tables))
           
        }
        localStorage.removeItem(`${user}`)
    }
   
    console.log(tables)
        $('.name').val('');
        $('.time').val('');
        $('.date').val('');
        $('.credit').val('');
        $('.tablenumber').val('');
        $('.resname').text('');
        $('.restime').text('');
        $('.resdate').text('');
        $('.restable').text('');

        $('.name').text('');
        $('.time').text('');
        $('.date').text('');
        $('.table_res').text('');


    }
)
$('.cancel2').click(function(){
    let  user=localStorage.getItem('currentuser');
    let currentuser=JSON.parse(localStorage.getItem(`${user}secandreservation`))
   
    let tables=JSON.parse(localStorage.getItem('bookingtable'))
    let arr=JSON.parse(localStorage.getItem('bookingtable'));
    for(let i=0;i<arr.length;i++){
        if(currentuser.includes(arr[i])){
            if(arr[i]==1){
                $('.T1').text('T1')
            }
            else if(arr[i]==2){
                $('.T2').text('T2')
            }else if(arr[i]==3){
                $('.T3').text('T3')
            }else if(arr[i]==4){
                $('.T4').text('T4')
            }else if(arr[i]==5){
                $('.T5').text('T5')
            }else if(arr[i]==6){
                $('.T6').text('T6')
            }else if(arr[i]==7){
                $('.T7').text('T7')
            }
            let myindex=tables.indexOf(tables[i]);
           
            tables.splice(myindex,1);
            localStorage.setItem('bookingtable',JSON.stringify(tables))
           
        }
        localStorage.removeItem(`${user}secandreservation`)
    }
   
    console.log(tables)
        $('.name').val('');
        $('.time').val('');
        $('.date').val('');
        $('.credit').val('');
        $('.tablenumber').val('');
        $('.resname2').text('');
        $('.restime2').text('');
        $('.resdate2').text('');
        $('.restable2').text('');

        $('.name2').text('');
        $('.time2').text('');
        $('.date2').text('');
        $('.table2_res').text('');
    }
)

$('.your_res').click(function(){
    $('.res_1').slideToggle(1000);
    $('.res_2').slideToggle(1000);

})

function settable_local(){
    if(localStorage.getItem('bookingtable')==undefined){
        localStorage.setItem('bookingtable',JSON.stringify([]))
    }
}
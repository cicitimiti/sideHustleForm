function message() {
    
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var email = document.getElementById('email');
    var gender = document.getElementById('gender');
    var pwd = document.getElementById('pwd');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');


    if(name.value === '' || phone.value === '' ||  email.value === '' ||  gender.value === '' || pwd.value === ''){
        danger.style.display = 'block';
    }
    else {
        setTimeout(()  => {
            name.value = '';
            phone.value = '';
            email.value = '';
            gender.value = '';
            pwd.value = '';
        }, 2000);

      success.style.display = 'block';
    }


     setTimeout(()  => {
         danger.style.display = 'none';
         success.style.display = 'none';
       }, 4000);

}
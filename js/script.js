var nameError=document.getElementById('name:required');
var emailError=document.getElementById('email:required');
var phoneError=document.getElementById('phone:required');
var messageError=document.getElementById('message:required');
var submitError=document.getElementById('submit-error');

function validateName()
{
    var name=document.getElementById('contact-name').value;

    if(name.length==0)
    {
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/))
    {
        nameError.innerHTML='Write full name';
        return false;
    }

    nameError.innerHTML='<span style="color: seagreen"><i class="fa-sharp fa-solid fa-circle-check"></i></span>';
    return true;
}

function validateEmail()
{
    var email=document.getElementById('email-id').value;
    if(email.length==0)
    {
        emailError.innerHTML='Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML='Email invalid';
        return false;

    }

    emailError.innerHTML='<span style="color: seagreen"><i class="fa-sharp fa-solid fa-circle-check"></i></span>';
    return true;
}

function validatePhnumber()
{
    var phone=document.getElementById('phone-num').value;
    if(phone.length ==0)
    {
        phoneError.innerHTML='Phone number is required.';
        return false;
    }
    if(phone.length !==10)
    {
        phoneError.innerHTML='Phone no should be 10 digits.';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/))
    {
        phoneError.innerHTML='only digits please.';
        return false;
    }

    phoneError.innerHTML='<span style="color: seagreen"><i class="fa-sharp fa-solid fa-circle-check"></i></span>';
    return true;
}

function validateMessage()
{
    var message=document.getElementById('message').value;
    var required=30;
    var left=required - message.length;

    if(left>0)
    {
        messageError.innerHTML='more characters required';
        return false;
    }

    messageError.innerHTML='<span style="color: seagreen"><i class="fa-sharp fa-solid fa-circle-check"></i></span>';
    return true;
}
function validateFunction()
{
    if(!validateName()&&!validateEmail()&&!validatePhnumber()&&!validateMessage())
    {
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}


window.onload = pageReady;
function pageReady() {
    
var msgOut = document.getElementById("confirmationMsg");
    
var formHandle = document.forms.rockadillyForm;
    /*console.log(formHandle);*/
    formHandle.onsubmit = processForm;

function processForm () {
    
        
    /*var nameValue = document.getElementById("in_Fullname");*/
    var nameValue = formHandle.f_Fullname; /*.value*/
        console.log(nameValue.value);
    
    /*var emailValue = document.getElementById("in_Email");*/
    var emailValue = formHandle.f_Email;
        console.log(emailValue.value);
        
    /*var subjectValue = document.getElementById("in_Subject");*/
    var subjectValue = formHandle.f_Subject;
        console.log(subjectValue.value);
    
    /*var messageValue = document.getElementById("in_Message");*/
    var messageValue = formHandle.f_Message;
        console.log(messageValue.value);
        
        
        
        
    var name_spanform = document.getElementById("mess_name");
    
	var email_spanform = document.getElementById("mess_email");
    
	
        
    
    if (nameValue.value === "" || nameValue === null) {
        nameValue.style.background = "black";
        nameValue.value = "";
        nameValue.style.color = "white";
        nameValue.focus();
        return false;
    } else {
		nameValue.style.background = "white";
	}
    
    if (emailValue.value === "" || emailValue === null ) {
        emailValue.style.background = "black";
        emailValue.value = "";
        emailValue.style.color = "white";
        emailValue.focus();
        return false;
    } else {
        emailValue.background = "white";
    }
        
    if (subjectValue.value === "") {
        subjectValue.style.background = "black";
        subjectValue.value = "";
        subjectValue.style.color = "white";
        subjectValue.focus();
        return false;
    } else {
        subjectValue.background = "white";
    }
        
     if (messageValue.value === "") {
        messageValue.style.background = "black";
        messageValue.value = "";
        messageValue.style.color = "white";
        messageValue.focus();
        return false;
    } else {
        messageValue.background = "white";
    }
    
    
    /*return false;*/
    
    name_spanform.innerHTML = nameValue.value;
    email_spanform.innerHTML = emailValue.value;
    
    
    formHandle.style.display = "none";
	msgOut.style.display = "block";
	return false;
 }    
 }
    


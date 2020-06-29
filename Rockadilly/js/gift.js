//creating onload listener
window.onload = pageReady;

//Creating an onload function
function pageReady(){
    var formHandle = document.forms.form_gift;
	formHandle.onsubmit = processForm;
	//creating a handle for the main page
	var bigImage = document.getElementById("mainImg");

	//getting gallery iamges
	var image1 = document.getElementById("pic1");
	var image2 = document.getElementById("pic2");
	var image3 = document.getElementById("pic3");
	
	


	//creating listeners for gallery images
	image1.onclick = switchPic1;
	image2.onclick = switchPic2;
	image3.onclick = switchPic3;
	
	
	

	//functions for changing images
	function switchPic1(){
		bigImage.src = image1.src;
	}

	function switchPic2(){
		bigImage.src = image2.src;
	}

	function switchPic3(){
		bigImage.src = image3.src;
	}

	//fuction for reseting image
	function resetPic(){
			bigImage.src = "Rockadilly-images/topimage.jpg";
	}

	//image reseting when mouse leaves
	//setting listeners
	image1.onmouseout = resetPic;
	image2.onmouseout = resetPic;
	image3.onmouseout = resetPic;
	
	
	function processForm() {
		var thankYou = document.getElementById("thanks_msg");
		var nameValue = formHandle.fname;
		var occassionValue = formHandle.occasion;
		var amountValue = formHandle.amount;
		var emailValue = formHandle.email;
		var thanksCustomer = document.getElementById("thanksCustomer");
		var thanksPc = document.getElementById("thanksPc");
		var inputName = document.getElementById("firstname");
		var inputOccasion = document.getElementById("Ocassion");
		var inputAmount = document.getElementById("amount");
		var inputEmail = document.getElementById("Email");
		
		
		if (nameValue.value === "" || nameValue.value === null) {
			inputName.style.background = "red";
			
			nameValue.focus();
			return false;
		}
		else {
			inputName.style.background = "white";
		}
		
		if (occassionValue.value === "" || occassionValue.value === null){
			inputOccasion.style.background = "red";
			
			occassionValue.focus();
			return false;
		}
		
		if (amountValue.value === "" || amountValue.value === null) {
			inputAmount.style.background = "red";
			
			amountValue.focus();
			return false;
		}
		else {
			inputAmount.style.background = "white";
		}
		
		if (emailValue.value === "" || emailValue.value === null) {
			inputEmail.style.background = "red";
			
			emailValue.focus();
			return false;
		}
		else {
			inputEmail.style.background = "white";
		}
		
		formHandle.style.display = "none";
		thankYou.style.display = "inline";
		
		thanksCustomer.innerHTML = nameValue.value;
		thanksPc.innerHTML = emailValue.value;
		
		return false;
		
	}
	
	
}//END onload FUNCTION
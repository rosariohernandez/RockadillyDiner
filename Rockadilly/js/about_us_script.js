window.onload = pageReady;

function pageReady(){

	var bigImage = document.getElementById("mainImg");

	var image1 = document.getElementById("pic1");
	var image2 = document.getElementById("pic2");
	var image3 = document.getElementById("pic3");

	image1.onclick = switchPic1;
	image2.onclick = switchPic2;
	image3.onclick = switchPic3;

	function switchPic1(){
		bigImage.src = image1.src;
	}

	function switchPic2(){
		bigImage.src = image2.src;
	}

	function switchPic3(){
		bigImage.src = image3.src;
	}

	image1.onclick = resetPic;
	image2.onclick = resetPic;
	image3.onclick = resetPic;

} //END onload FUNCTION
// alert("hello");

var i_tracker = "k";
function change()
{
	var image = document.getElementById("k_img");
	if(i_tracker=="k")
	{
		image.src = "Rockadilly-images/shutterstock_531141979.jpg";
		i_tracker = "s";
	}
	else
	{
		image.src = 'Rockadilly-images/50sKaraoke.jpeg';
		i_traker= "k";
	}
}

var s_tracker = "s";
function call()
{
	var image = document.getElementById("s_img");
	if(s_tracker=="s")
	{
		image.src = "Rockadilly-images/fluffy.jpg";
		s_tracker = "f";
	}
	else
	{
		image.src = "Rockadilly-images/standup.jpg";
		s_traker= "s";
	}
}

var g_tracker = "g";
function guest()
{
	var image = document.getElementById("g_img");
	if(g_tracker=="g")
	{
		image.src = "Rockadilly-images/Gordon.jpeg";
		g_tracker = "r";
	}
	else
	{
		image.src = "Rockadilly-images/guest.jpg";
		g_traker= "s";
	}
}

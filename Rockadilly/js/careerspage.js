jQuery(document).ready(function() {
		jQuery(".contentBox").hide();
	
	$("h2").click(function() {
		$(this).next(".contentBox").slideToggle("fast");
	});
	$('h2').hover(
	   function() {$('h2').css('background', '#ef5350');},
	   function() {$('h2').css('color', 'black');}
	);
	$(".contentBox").hover(
	function(){$(".contentBox").css({'background':'#FFE5C3', 'color':'#524737'});},
	function(){$(".contentBox").css({'background':'#524737', 'color':'#FFe5C3'});}
	);
});
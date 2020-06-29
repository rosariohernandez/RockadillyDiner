$(document).ready(function(){
    //show links by default
    $('ul').show();

    //when an h2 tag is clicked toggle its list
    $('h2').click(function(){
        $(this).next('ul').toggle(500);
    });
 
});//end page load
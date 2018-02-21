//themes
var newColor= "blue";
var oldColor= "blue";

$(".theme-choice").click(function(){
	newColor= $(this).attr('id');
	$("."+oldColor).removeClass(oldColor).addClass(newColor);
	oldColor=newColor;
});

function changeTheme(){
		newColor= jQuery(this).attr('id');
	$("."+oldColor).removeClass(oldColor).addClass(newColor);
	oldColor=newColor;
}

//import jQuery before materialize.js if you want their functions to work;
$( document ).ready(function() {
	$(".dropdown-button").dropdown();
        
});
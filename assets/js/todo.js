var style1={
	color:"gray",
	textDecoration:"line-through"
};
var style2={
	color:"black",
	textDecoration:"none"
};
$("ul").on("click", "li",function(){
	
	console.log($(this).css("color"));

	$(this).toggleClass("completed");
});

$("ul").on("click", "span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
 
})

$("input[type='text']").keypress(function(event){
	console.log("key press");
	if(event.which===13){
		console.log("You hit enter");
		var text= $(this).val();
		$(this).val("");
		$("ul").append("<li>"+'<span><i class="fa fa-trash"></i></span> '+text+"</li");	
	}
}) 
$(".pen").click(function(){
	$("input[type='text']").fadeToggle();
})
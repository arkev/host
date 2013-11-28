$(document).on("ready", inicio);
function inicio () 
{
	//nueva ventana
	$("a.new_window").attr("target", "_blank");
	//slider
	$('.bxslider').bxSlider({
		auto: true
	});
}
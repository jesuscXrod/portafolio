$(document).ready(function(){

    var acercaDe = $('#acerca-de').offset().top,
    portfolio = $('#portafolio').offset().top,
    contacto = $('#contacto').offset().top;
    
	$('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
		$('html, body').animate({
            scrollTop: acercaDe - 100
		}, 500);
	});

	$('#btn-portfolio').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: portfolio
		}, 500);
	});

	$('#btn-contacto').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: contacto
		}, 500);
	});
});

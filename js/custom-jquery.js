$(document).ready(function(){
			
	document.querySelectorAll('.button').forEach(button => button.innerHTML = '<div><span>' + button.textContent.trim().split('').join('</span><span>') + '</span></div>');

	$('.toggleButton').click(function(){
		$(this).toggleClass('active-menu');
		$('.siteHeader__menu').slideToggle();
	});


	$('.register-btn').click(function(){
		$('.register-modal').fadeIn();
		$('body').addClass('modal-show');
	});

	$('.close-icon').click(function(){
		$('.register-modal').fadeOut();
		$('body').removeClass('modal-show');
	});


	// Header Jquery

	$(window).scroll(function(){
	  var sticky = $('.siteHeader '),
	      scroll = $(window).scrollTop();

	  if (scroll >= 100) sticky.addClass('sticky-Header');
	  else sticky.removeClass('sticky-Header');
	});

			
});
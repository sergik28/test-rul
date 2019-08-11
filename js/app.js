$('.button_menu').click(function() {
	$('.name_button').hide();
	$(this).css({'text-align' : 'left'});
	$(this).css({'margin-left' : '23px'});
	$('.leftMenu').css({'width' : '80px'}).css({'transition' : '0.3s'});
	function hide_close() {
		$('.button_menu').hide();
		$('.button_menu_open').show();
	}
	setTimeout(hide_close, 0);
});


$('.button_menu_open').click(function() {
	$('.leftMenu').css({'width' : '300px'}).css({'transition' : '0.3s'});
	$('.button_menu').css({'text-align' : 'center'});
		$('.button_menu').show();
		$('.button_menu_open').hide();
	function hide_close() {
		$('.name_button').show();
	}
	setTimeout(hide_close, 200);
});

$('.text_chat_closed').click(function() {
	$('.chatBlock').css({'height' : '68px'}).css({'transition' : '0.5s'});
	$(this).hide('slow');
	$('.text_chat_open').show('slow');
});


$('.text_chat_open').click(function() {
	$('.chatBlock').css({'height' : '100vh'}).css({'transition' : '0.5s'});
	$('.text_chat_closed').show('slow');
	$('.text_chat_open').hide('slow');
});
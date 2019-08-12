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

$('.closed_chat').click(function() {
	$('.chatBlock').css({'margin-right' : '-300px'}).css({'transition' : '0.3s'});
	$(this).hide();
	$('.open_chat').show();
});


$('.open_chat').click(function() {
	$('.chatBlock').css({'margin-right' : '0px'}).css({'transition' : '0.3s'});
	$(this).hide();
	$('.closed_chat').show();
});
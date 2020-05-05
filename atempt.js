
//открытие и закрытие меню навигации на малых экранах
$(document).ready(function(){
	$('.button_open_menu').click(function(){
		$('ul.main_nav').toggleClass('hide_forSmScreen');

	});
});

//работа с открытием в навигации списка материалов на малых экранах
$(document).ready(function(){
var Iam
var Index
	$('.dropdown_plus').click(function(){
		Iam=$(this);
		Index=$('.dropdown_plus').index(Iam);
		Toggle_Active();
		ShowHide_dropdown_content();
	});

	function Toggle_Active(){
		Iam.find('a').first().toggleClass('active')
		$('.dropdown_category').eq(Index).find('a').first().toggleClass('active');  //
	};

	function ShowHide_dropdown_content(){
		$('.dropdown_content').eq(Index).toggleClass('show_forSmScreen');

	};
});

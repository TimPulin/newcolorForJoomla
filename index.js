
//открытие и закрытие меню навигации на малых экранах
$(document).ready(function(){
	$('.button_open_menu').click(function(){
		$('.main_nav').toggleClass('hide_forSmScreen');

	});
});

//работа с открытием в навигации списка материалов на малых экранах
$(document).ready(function(){
var Iam
var Index
	$('.dropdown_arrow').click(function(){
		Iam=$(this);
		Index=$('.dropdown_arrow').index(Iam);
		Toggle_Active();
		ShowHide_dropdown_content();//&#9650; стрелка вверх
		ChangeArrow();

	});

	function Toggle_Active(){
		Iam.toggleClass('active')
		$('.dropdown_category').eq(Index).toggleClass('active');
	};

	function ShowHide_dropdown_content(){
		$('.dropdown_content').eq(Index).toggleClass('show_forSmScreen');

	};

	function ChangeArrow(){
		if (Iam.hasClass('active')){
			Iam.html('&#9650');
		} else {
			Iam.html('&#9660');
		}
	};
});

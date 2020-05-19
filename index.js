
//открытие и закрытие меню навигации на малых экранах
jQuery(document).ready(function(){
	jQuery('.button_open_menu').click(function(){
		jQuery('.nav_menu').toggleClass('hide_forSmScreen');

	});
});

//работа с открытием в навигации списка материалов на малых экранах
jQuery(document).ready(function(){
var Iam
var Index
	jQuery('.dropdown_arrow').click(function(){
		Iam=jQuery(this);
		Index=jQuery('.dropdown_arrow').index(Iam);
		Toggle_Active();
		ShowHide_dropdown_content();//&#9650; стрелка вверх
		ChangeArrow();

	});

	function Toggle_Active(){
		Iam.toggleClass('active')
		jQuery('.dropdown_category').eq(Index).toggleClass('active');
	};

	function ShowHide_dropdown_content(){
		jQuery('.dropdown_content').eq(Index).toggleClass('show_forSmScreen');

	};

	function ChangeArrow(){
		if (Iam.hasClass('active')){
			Iam.html('&#9650');
		} else {
			Iam.html('&#9660');
		}
	};
});

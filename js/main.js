$(document).ready(function(){
	function showModal(id){
		$(document.body).addClass('is-open-modal');
		$(id).addClass('is-open');
		console.log(id);
	}
	function hideModals(){
		$(document.body).removeClass('is-open-modal');
		$('.modal').removeClass('is-open');
	}

	$(".modal-open").on('click', function(e){
		console.log(e);
		showModal('#modal1');
    });
	
	$(document).on('click', function(e){
		if (!(
		($(e.target).parents('.dialog').length)
		||	($(e.target).hasClass('dialog'))
		||	($(e.target).hasClass('modal-open')))
		) {
			hideModals();
		}
	});
	
});

$(document).ready(function(){
	$(".menu, .menu-footer, .hamb__block").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top-50}, 1000);
	});
});
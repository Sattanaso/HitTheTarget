// language button
$(() => {
	let isBG = false;
	$('#language').on('click', () => {
		isBG = !isBG;
		if (isBG) {
			$('#language').attr('src', './assets/images/gb.jpg');
		} else {
			$('#language').attr('src', './assets/images/bg.jpg');
		}
	});
})

// drop-down menu
$(() => {
	let isToggle = false;
	let $navbar = $('ul.menu-bar');
	$('.menu-bar-btn').on('click', () => {
		if (!isToggle) {
			$navbar.css('display', 'inherit');
		} else {
			$navbar.css('display', 'none');
		}

		isToggle = !isToggle;
	});

	$('.menu-bar li a').on('click', () => {
		$navbar.css('display', 'none');
		$('#overlay').hide();
		$('.lines-button').removeClass('close');
		isToggle = !isToggle;
	});

	$(document).on('click', '.lines-button', function () {
		$('#overlay').show();
		$('.lines-button').addClass('close');
	});
	$(document).on('click', '.lines-button.close', function () {
		$('#overlay').hide();
		$('.lines-button').removeClass('close');
	});
});
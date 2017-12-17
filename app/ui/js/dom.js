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

	let isToggleFoot = false;
	let $navbarfoot = $('ul.menu-bar-foot');
	$('.menu-bar-btn-foot').on('click', () => {
		if (!isToggleFoot) {
			$navbarfoot.css('display', 'inherit');
		} else {
			$navbarfoot.css('display', 'none');
		}

		isToggleFoot = !isToggleFoot;
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

	$(document).on('click', '.lines-button-foot', function () {
		$('#overlay').show();
		$('.lines-button-foot').addClass('close');
	});
	$(document).on('click', '.lines-button-foot.close', function () {
		$('#overlay').hide();
		$('.lines-button-foot').removeClass('close');
	});
});
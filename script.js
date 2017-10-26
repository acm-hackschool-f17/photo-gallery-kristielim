
function attachEventHandlers() {
	$('.image').on('click', handleImageClick);
	$('.choice-image').on('click', handleChoiceImageClick);
}

function handleImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	console.log(images);
	const info = $('.info-pane');
	const preview = $('.preview-image');

	if (target.hasClass('selected')) {
		images.removeClass('not-selected');
		target.removeClass('selected');
		info.fadeOut(200);
	}
	else {
		images.removeClass('selected');
		images.addClass('not-selected');

		target.addClass('selected');
		target.removeClass('not-selected');

		info.fadeIn(200);
		preview.css('background-image', target.css('background-image'));
	}
}

function handleChoiceImageClick(event) {
	const target = $(event.target);
	const images = $('.photo-row .image');
	const imageUrls = [];
	for (var i = images.length - 1; i >= 0; i--) {
		imageUrls[i] = images[i].css('background-image');
	}
}

$('document').ready(function() {

	attachEventHandlers();

});

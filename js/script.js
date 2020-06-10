const btnAddPercent1 = $('#add_percent_1');
const btnAddPercent3 = $('#add_percent_3');
const btnAddPercent7 = $('#add_percent_7');
const percentageCompleted1 = 1;
const percentageCompleted3 = 3;
const percentageCompleted7 = 7;

$(document).ready(function() {

	btnAddPercent1.click(function(event) {
		let nowWidth = Number($('.progress-bar').attr("style").replace(/\D+/g,"")); 
		if (nowWidth>=100) {
			$('.progress-bar').css('width', nowWidth + percentageCompleted1 + '%').text('Loading completed!');
		}
		else {
			$('.progress-bar').css('width', nowWidth + percentageCompleted1 + '%');
			$('.progress-bar').css('width', nowWidth + percentageCompleted1 + '%').text(nowWidth + percentageCompleted1 + '%');
		}
	});

	btnAddPercent3.click(function(event) {
		let nowWidth = Number($('.progress-bar').attr("style").replace(/\D+/g,""));
		if (nowWidth>=100) {
			$('.progress-bar').css('width', nowWidth + percentageCompleted3 + '%').text('Loading completed!');
		}
		else {
			$('.progress-bar').css('width', nowWidth + percentageCompleted3 + '%');
			$('.progress-bar').css('width', nowWidth + percentageCompleted3 + '%').text(nowWidth + percentageCompleted3 + '%');
		}
	});

	btnAddPercent7.click(function(event) {
		let nowWidth = Number($('.progress-bar').attr("style").replace(/\D+/g,""));
		if (nowWidth>=100) {
			$('.progress-bar').css('width', nowWidth + percentageCompleted7 + '%').text('Loading completed!');
		}
		else {
			$('.progress-bar').css('width', nowWidth + percentageCompleted7 + '%');
			$('.progress-bar').css('width', nowWidth + percentageCompleted7 + '%').text(nowWidth + percentageCompleted7 + '%');
		}
	});

});	


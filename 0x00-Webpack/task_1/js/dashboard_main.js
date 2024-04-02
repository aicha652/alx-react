import $ from "jquery";
$(document).ready(function(){
	$('body').append('<p>Holberton Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');
	$('body').append('<button id="clickButton">Click here to get started</button>');
	$('body').append('<p id="count"></p>');
	$('body').append('<p>Copyright - Holberton School</p>');

	$('#clickButton').click(updateCounter);
});

function updateCounter(){
	let text = document.getElementById('count');
	let counter = parseInt(text.innerText.split(' ')[0]);

	counter++;

	text.textContent = `${counter} clicks on the button`;
}

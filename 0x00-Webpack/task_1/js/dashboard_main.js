import $ from "jquery";
import debounce from "lodash/debounce";
$(document).ready(function(){
	$('body').append('<p>Holberton Dashboard</p>');
	$('body').append('<p>Dashboard data for the students</p>');
	$('body').append('<button>Click here to get started</button>');
	$('body').append('<p id="count"></p>');
	$('body').append('<p>Copyright - Holberton School</p>');
});

function updateCounter(){
	let text = document.getElementById('count');
	let counter = parseInt(text.innerText.split(' ')[0]);

	counter++;

	text.textContent = `${counter} clicks on the button`;
	button.addEventListener('click', debounce(updateCounter, 500));
}

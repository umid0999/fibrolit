const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



$(function () {
	let header = $("#header");
	let intro = $("#intro");
	let introv = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	
	$(window).on("scroll load resize",function() {
		introv = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		if (scrollPos > introv) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}
		// console.log(scrollPos);
	});

	/*SCROLL*/

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();
		let blockID = $(this).data('scroll');
		let blockOffset = $(blockID).offset().top;
		header.removeClass("show");
		 // console.log(blockOffset);
		$("html , body").animate({
			scrollTop: blockOffset -100
		}, 700)

	});
});
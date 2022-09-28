//###############
// Bulma navbar #
//###############
/*
[OVERVIEW] Bulma navbar:
https://bulma.io/documentation/components/navbar/

[INFO] I use hoverable menu expanding on landscape screens
and toggable for portrait screens.

[INFO] If hoverable — the dropdown menu will open/close on hover on desktop devices
and on tap on mobile.
Else toggable — dropdown menu will need to be manually opened/closed by clicking on desktop devices
and tapping on mobile.

[INFO] If toggable for landscape orientation,
click required to close dropdown menu:
https://i.imgur.com/8dVbsTC.png
 */
/*
[INFO] Open menu on mobile devices by tap/click on burger button:
https://bulma.io/documentation/components/navbar/#navbar-menu
 */
document.addEventListener('DOMContentLoaded', function() {
	var $navbarBurgers;
	// [INFO] Get all "navbar-burger" elements
	$navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
	// [INFO] Add a click event on each of them
	$navbarBurgers.forEach(function(el) {
		el.addEventListener('click', function() {
			var $target, target;
			// [INFO] Get the target from the "data-target" attribute
			target = el.dataset.target;
			$target = document.getElementsByClassName(target)[0];
			// [INFO] Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
			el.classList.toggle('is-active');
			$target.classList.toggle('is-active');
		});
	});
});

/*
[INFO] Toggle dropdown menu by click:
https://github.com/jgthms/bulma/issues/1567#issue-284766970
https://codepen.io/tanmaydas/pen/dKbBQK
 */
document.querySelectorAll('.navbar-link').forEach(function(navbarLink) {
	navbarLink.addEventListener('click', function() {
		navbarLink.nextElementSibling.classList.toggle('is-hidden-portrait');
	});
});

//# sourceMappingURL=bulma-navbar.js.map

(function ($) {
var primary = localStorage.getItem("primary") || '#7366ff';
var secondary = localStorage.getItem("secondary") || '#FF8575';

window.woolAdminConfig = {
	// Theme Primary Color
	primary: primary,
	// theme secondary color
	secondary: secondary,
};
})(jQuery);

(function () {
  var primary = localStorage.getItem("primary") || "#795EBD";
  var secondary = localStorage.getItem("secondary") || "#F07EB5";
  var tertiary = localStorage.getItem("tertiary") || "#D6D16D";

  window.RokoAdminConfig = {
    // Theme Primary Color
    primary: primary,
    // theme secondary color
    secondary: secondary,
    // theme secondary color
    tertiary: tertiary,
  };
})();

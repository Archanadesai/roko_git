(function () {
  var primary = localStorage.getItem("primary") || "#795EBD";
  var secondary = localStorage.getItem("secondary") || "#F07EB5";

  window.RokoAdminConfig = {
    // Theme Primary Color
    primary: primary,
    // theme secondary color
    secondary: secondary,
  };
})();

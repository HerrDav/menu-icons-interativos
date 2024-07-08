$(document).ready(function() {
  var toggleSound = $("#toggleSound")[0];
  var openSound = $("#openSound")[0];
  var hoverSound = $("#hoverSound")[0];

  let menuToggle = document.querySelector(".menuToggle");
  let menu = document.querySelector(".menu");

  menuToggle.onclick = function () {
    menu.classList.toggle("active");
    toggleSound.currentTime = 0; // Reset the audio to start from the beginning
    toggleSound.play();
    if (menu.classList.contains("active")) {
      openSound.currentTime = 0; // Reset the audio to start from the beginning
      openSound.play();
    }
  };

  $("a").mouseenter(function() {
    hoverSound.currentTime = 0; // Reset the audio to start from the beginning
    hoverSound.play();
  });

  // Handle color change
  $("#menuColorPicker").on("input", function() {
      var newColor = $(this).val();
      document.documentElement.style.setProperty('--clr', newColor);
      $(".menu li").each(function(index) {
      $(this).css('--clr', newColor);
      });
  });
});
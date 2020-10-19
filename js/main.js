/*Start display search fornm */
document.getElementById("search").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("search-form").style.display = "inline-block";
}
/* End display search fornm */

var myVideo = document.getElementById("video");

function playPause() {
  var playicon = document.getElementById("play-icon");
  var pauseicon = document.getElementById("pause-icon");
  var overlayvidoe1 = document.getElementById("overlayvidoe1");
  if (myVideo.paused) {
    playicon.style.display = "none";
    myVideo.play();
    pauseicon.style.display = "inline ";
    pauseicon.style.opacity = "0.1 ";
    overlayvidoe1.style.opacity = "0 ";
  } else {
    myVideo.pause();
    pauseicon.style.display = "none";

    playicon.style.display = "inline-block";
    overlayvidoe1.style.opacity = "0.6 ";
  }
}

$(".container  >.dropdown-item").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
$(".navbar-nav > .nav-item").click(function () {
  $(this).addClass("show").siblings().removeClass("show");
  $(this).siblings().find(".dropdown-menu").removeClass("show");
  $(this).find(".dropdown-menu").addClass("show");
});

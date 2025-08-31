document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 800); // 3s animation time
});
// Loader fade-out and content fade-in
setTimeout(function() {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // fade-out loader
  loader.classList.add("fade-out");

  // after fade-out ends, hide loader & show content
  setTimeout(function() {
    loader.style.display = "none";
    content.style.display = "block";
    content.classList.add("fade-in");
  }, 1000); // matches CSS fadeOut duration
}, 3000); // keep loader for 3s


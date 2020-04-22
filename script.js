// Get popup window
var modal = document.getElementById("divContainer");

// Get the button/icon that opens the popup window
var btn = document.getElementById("demo");

// When the user clicks the button/icon, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

// When the user clicks anywhere outside of the popup window, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

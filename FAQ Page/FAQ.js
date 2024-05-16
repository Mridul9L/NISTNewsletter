// Get all the accordion buttons
var acc = document.querySelectorAll(".accordion");

// Loop through the accordion buttons and add click event listeners
acc.forEach(function(item) {
  item.addEventListener("click", function() {
    var panel = this.nextElementSibling;

    // Close all panels except the one associated with the clicked button
    acc.forEach(function(el) {
      if (el !== item) {
        el.classList.remove("active");
        el.nextElementSibling.style.display = "none";
      }
    });

    // Toggle active class to highlight the clicked button
    item.classList.toggle("active");

    // If the panel is currently displayed, hide it; otherwise, display it
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

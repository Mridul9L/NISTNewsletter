function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block"; // Show the popup
    document.getElementById("overlay").style.display = "block"; // Show the overlay
    document.body.style.overflow = "hidden"; // Disable scrolling on the body
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none"; // Hide the specified popup
    document.getElementById("overlay").style.display = "none"; // Hide the overlay
    document.body.style.overflow = "auto"; // Enable scrolling on the body
}

// document.addEventListener("DOMContentLoaded", function() {
//     var showPopupButton = document.getElementById("showPopup");
//     var popup = document.getElementById("popup");

//     showPopupButton.addEventListener("click", function(event) {
//         var buttonRect = showPopupButton.getBoundingClientRect();
//         var top = buttonRect.bottom + window.scrollY;
//         var left = buttonRect.left + window.scrollX;

//         // Show the popup with a fade-in effect
//         popup.style.top = top + "px";
//         popup.style.left = left + "px";
//         popup.style.opacity = 0; // Start with opacity at 0
//         popup.style.display = "block";

//         // Trigger a reflow to apply initial styles
//         popup.getBoundingClientRect();

//         // Fade in the popup
//         popup.style.opacity = 1;

//         // Hide the popup after 2 seconds
//         setTimeout(function() {
//             popup.style.opacity = 0; // Fade out by changing opacity
//             setTimeout(function() {
//                 popup.style.display = "none"; // Hide after fading out
//             }, 500); // Time to complete the fade-out (adjust as needed)
//         }, 2000); // Time to wait before hiding (2 seconds)
//     });
// });


document.addEventListener("DOMContentLoaded", function() {
    var showPopupButton = document.getElementById("showPopup");
    var otherElement = document.getElementById("otherElement"); // Add this line
    var popup = document.getElementById("popup");

    function showPopup() {
        var buttonRect = showPopupButton.getBoundingClientRect();
        var top = buttonRect.bottom + window.scrollY;
        var left = buttonRect.left + window.scrollX;

        popup.style.top = top + "px";
        popup.style.left = left + "px";
        popup.style.opacity = 0;
        popup.style.display = "block";

        popup.getBoundingClientRect();

        popup.style.opacity = 1;

        setTimeout(function() {
            popup.style.opacity = 0;
            setTimeout(function() {
                popup.style.display = "none";
            }, 500);
        }, 2000);
    }

    showPopupButton.addEventListener("click", showPopup);

    // Add an event listener for the other element
    otherElement.addEventListener("click", showPopup);
});

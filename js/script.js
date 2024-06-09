document.addEventListener("DOMContentLoaded", function() {
    // Get all buttons
    var buttons = document.querySelectorAll('.toggle-btn');
    
    // Attach click event listener to each button
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Toggle the display of the next sibling element (which is the additional text)
            var textToShow = this.nextElementSibling;
            toggleText(textToShow);
        });
    });

    // Function to toggle the display of an element
    function toggleText(element) {
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }
});

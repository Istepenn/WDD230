document.addEventListener("DOMContentLoaded", function() {
    // Set the current year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Set the last modified date
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});

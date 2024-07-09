document.addEventListener("DOMContentLoaded", function() {
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
        visitCount = 0;
    }
    visitCount++;
    localStorage.setItem('visitCount', visitCount);

    const visitCounterDiv = document.getElementById('visitCounter');
    visitCounterDiv.textContent = `Page Visits: ${visitCount}`;
});

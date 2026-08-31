let currentPage = 1;

// Regular Page Navigation (Pages 1 to 4)
function nextPage(pageNum) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    // Show step progress bar
    document.getElementById('progress-bar').style.display = 'flex';

    currentPage = pageNum;
    document.getElementById(`page-${currentPage}`).classList.add('active');

    // Step Node Color Logic
    for (let i = 1; i <= 4; i++) {
        const step = document.getElementById(`step-${i}`);
        if (i <= currentPage) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }

        if (i < 4) {
            const line = document.getElementById(`line-${i}`);
            if (i < currentPage) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        }
    }
}

// Redirect to Separate Response Pages (Yes / No)
function goToResponsePage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    // Hide progress bar for standalone response pages
    document.getElementById('progress-bar').style.display = 'none';

    document.getElementById(pageId).classList.add('active');
}

let currentPage = 1;

// Normal Step Navigation (Pages 1 to 4)
function nextPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));
    
    // Show Progress Bar
    document.getElementById('progress-bar').style.display = 'flex';

    currentPage = pageNum;
    document.getElementById(`page-${currentPage}`).classList.add('active');

    // Update Progress Step Colors
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

// Function triggered when "Yes" is clicked
function showYesMessage() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    document.getElementById('progress-bar').style.display = 'none';
    document.getElementById('page-yes').classList.add('active');
}

// Function triggered when "No" is clicked
function showNoMessage() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => p.classList.remove('active'));

    document.getElementById('progress-bar').style.display = 'none';
    document.getElementById('page-no').classList.add('active');
}

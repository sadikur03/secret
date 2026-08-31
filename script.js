let currentPage = 1;

// Page Navigation
function nextPage(pageNum) {
    document.getElementById(`page-${currentPage}`).classList.remove('active');
    
    currentPage = pageNum;
    document.getElementById(`page-${currentPage}`).classList.add('active');

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

// Accept Button Click (Yes)
function acceptProposal() {
    document.getElementById('btn-group-box').style.display = 'none';
    document.getElementById('sad-box').style.display = 'none';
    document.getElementById('success-box').style.display = 'block';
}

// Reject Button Click (No)
function rejectProposal() {
    document.getElementById('btn-group-box').style.display = 'none';
    document.getElementById('success-box').style.display = 'none';
    document.getElementById('sad-box').style.display = 'block';
}

// Reset Options when clicking "Think Again"
function resetChoice() {
    document.getElementById('sad-box').style.display = 'none';
    document.getElementById('btn-group-box').style.display = 'flex';
}

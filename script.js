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

// Photo Upload Preview
function previewPhoto(event, targetImgId) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById(targetImgId).src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
}

// Dodging "No" Button
function escapeNoButton() {
    const noBtn = document.getElementById('no-btn');
    const container = document.getElementById('btn-group-box');
    
    const containerRect = container.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;

    const randomX = Math.random() * (maxX - 10);
    const randomY = Math.random() * (maxY - 10);

    noBtn.style.left = `${Math.max(5, randomX)}px`;
    noBtn.style.top = `${Math.max(5, randomY)}px`;
}

// Accept Button Click
function acceptProposal() {
    document.getElementById('btn-group-box').style.display = 'none';
    document.getElementById('success-box').style.display = 'block';
}
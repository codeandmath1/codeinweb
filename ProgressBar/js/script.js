let progress = 0;
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

function animateProgress() {
    progress += 1;
    if (progress > 100) {
        progress = 0;
    }
    progressBar.style.width = progress + '%';
    progressText.textContent = `Cargando... ${progress}%`;
}

setInterval(animateProgress, 50);

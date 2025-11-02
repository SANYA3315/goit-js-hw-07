const input = document.querySelector('.name');
const outputEl = document.querySelector('#name-output');

if (input && outputEl) {
    input.addEventListener('input', outName);
}

function outName(event) {
    const raw = event.currentTarget.value;
    const cleaned = raw.trim();

    outputEl.textContent = cleaned === '' ? 'Anonymous' : cleaned;
}

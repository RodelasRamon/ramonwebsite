const btnChange = document.querySelector('#color-btn-change');
btnChange.addEventListener('click', () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    console.log(rgbColor)

    document.body.style.backgroundColor = rgbColor;
})

const btnReset = document.querySelector('#color-btn-reset');
btnReset.addEventListener('click', () => {
    document.body.style.backgroundColor = '#5e42a6';
})

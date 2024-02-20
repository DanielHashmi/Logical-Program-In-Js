let ract = document.querySelector('.ract');

ract.addEventListener('mousemove', (e) => {
    let forBlue = 255;

    if (e.offsetX < 320) {
        ract.style.backgroundColor = `rgb(255 ${e.offsetX / 255 * 100 * 2} ${e.offsetX / 255 * 100 * 2})`
    } else {
        ract.style.backgroundColor = `rgb(${forBlue - e.offsetX * 100 / 255 + forBlue - e.offsetX * 100 / 255} 
                                          ${forBlue - e.offsetX * 100 / 255 + forBlue - e.offsetX * 100 / 255} 255)`
    }
})
ract.addEventListener('mouseleave', (e) => {
    ract.style.backgroundColor = 'white'
})
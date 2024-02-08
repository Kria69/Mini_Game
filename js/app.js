const screens = document.querySelectorAll('.screen')
const colHeaders = document.querySelectorAll('.col-header')
const container = document.querySelector('.container')
const board = document.querySelector('#board')
const startBtn = document.querySelector('#start')

let squaresNumber = 400
const colors = ['#DC143C', '#00FF00', '#FF1493', '#00FFFF', 'orange', 'yellow', '#FF00FF', 'blue']

startBtn.addEventListener('click', (event) =>{
    event.preventDefault()
    screens[0].classList.add('up')
    document.querySelector('.row').classList.add('visible')
    startBtn.style.display = 'none'
})

colHeaders.forEach(colHeader => {
    colHeader.addEventListener('click', () => {
        const dataSizeValue = colHeader.dataset.size
        const [width, height] = dataSizeValue.split('x').map(Number)
        squaresNumber = height
        sizeBoard(width)
        board.innerHTML = ''

        for (let i = 0; i < squaresNumber; i++) {
            const square = document.createElement('div')
            square.classList.add('square')
            square.addEventListener('mouseover', () => setColor(square))
            square.addEventListener('mouseleave', removeColor)
            square.addEventListener('touchstart', () => setColor(square));
            square.addEventListener('touchend', () => removeColor(square));
            board.append(square)
        }
    })
})

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor = '#38424d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

function sizeBoard(sizeNumber) {
    switch (sizeNumber) {
        case 100:
            container.style.maxWidth = '200px'
            break
        case 225:
            container.style.maxWidth = '300px'
            break
        case 400:
            container.style.maxWidth = '400px'
            break
        case 625:
            container.style.maxWidth = '500px'
            break
        default:
            break
    }
}
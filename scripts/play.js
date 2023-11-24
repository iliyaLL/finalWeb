let audio = document.getElementById('bestie')
const image = document.querySelector('.imgContainerv1')
image.addEventListener('mouseover', event => {
    audio.play()
})

image.addEventListener('mouseleave', event => {
    audio.pause()
})
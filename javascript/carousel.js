//carousel

const track = document.querySelector('.carousel_track')
const slides = Array.from(document.querySelectorAll('.carousel_slide'))
const nextButton = document.querySelector('.carousel-button-right')
const prevButton = document.querySelector('.carousel-button-left')
const dotsNav = document.querySelector('.carousel-nav')
const dots = dotsNav.querySelectorAll('.carousel-indicator')
const slideWidth = slides[0].getBoundingClientRect().width

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

//styles dots
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}

const displayArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0){
        prevButton.classList.add('is-hidden')
        nextButton.classList.remove('is-hidden')
    }else if (targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden')
        nextButton.classList.add('is-hidden')
    }else if (targetIndex > 0 && targetIndex < slides.length - 1){
        prevButton.classList.remove('is-hidden')
        nextButton.classList.remove('is-hidden')
}
}


nextButton.addEventListener('click', (event) =>{
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling

    const currentDot = dotsNav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling
    const nextIndex = slides.findIndex((slide) => slide === nextSlide) 
    
    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot);

    displayArrows(slides, prevButton, nextButton, nextIndex)

})

prevButton.addEventListener('click', (event) => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling

    const currentDot = dotsNav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling
    const prevIndex = slides.findIndex((slide) => slide === prevSlide) 

    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)

    displayArrows(slides, prevButton, nextButton, prevIndex)
})

dotsNav.addEventListener('click', (event) =>{
    const targetDot = event.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide')
    const currentDot =  dotsNav.querySelector('.current-slide')
    const targetIndex = Array.from(dots).findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide);

    updateDots(currentDot, targetDot)
    
    displayArrows(slides, prevButton, nextButton, targetIndex)
})


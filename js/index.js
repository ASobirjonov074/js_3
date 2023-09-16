// const prev = document.querySelector('.offer__slider-prev')
// const next = document.querySelector('.offer__slider-next')
// const slides = document.querySelectorAll('.offer__slide')


// let slideIndex = 0

// slides.forEach(slide => slide.classList.add('hide'))
// slides[slideIndex].classList.remove('hide')



// prev.onclick = () => {
//     slideIndex--;
//     if(slideIndex < 0) {
//         slideIndex === slides.length - 1;
//     }

//     // if(slideIndex > 1) {
//     //     slideIndex === slides.length + 1
//     // }
    
// }
// next.onclick = () => {

// }

const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const slides = document.querySelectorAll('.offer__slide')
const currentView = document.querySelector('#current')
const totalView = document.querySelector('#total')

let slideIndex = 0
totalView.innerHTML = slides.length >= 10 ? slides.length : `0${slides.length}`

function slideShow(n) {

    if(n > slides.length - 1) {
        slideIndex = 0
    } 
    if(n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('fade','hide'))
    slides[slideIndex].classList.remove('hide')
    currentView.innerHTML = slideIndex + 1 >= 10 ? slideIndex + 1 : `0${slideIndex + 1}`
}

slideShow()

prev.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
}
next.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
}

// const prev = document.querySelector('.offer__slider-prev')
// const next = document.querySelector('.offer__slider-next')
// const slides = document.querySelectorAll('.offer__slide')
// const currentView = document.querySelector('#current')
// const totalView = document.querySelector('#total')


// let slideIndex = 0
// totalView.innerHTML = `0${slides.length}`

// function slideShow(n) {

//     if(n > slides.length - 1) {
//         slideIndex = 0
//     }
//     if(n < 0) {
//         slideIndex = slides.length - 1
//     }

//     slides.forEach(slide => slide.classList.add('fade','hide'))
//     slides[slideIndex].classList.remove('hide')
//     currentView.innerHTML = `0${slideShow + 1}`
// }

// slideShow(slideIndex)

  

// prev.onclick = () => {
//     slideIndex--
//     slideShow(slideIndex)
// }
// next.onclick = () => {
//     slideIndex++
//     slideShow(slideIndex)
// }


let btnsOpen = document.querySelectorAll('[data-modal]')
let modal = document.querySelector('.modal')
let close = document.querySelectorAll('[data-close]')
let inp = document.querySelector('.modal__content input')

btnsOpen.forEach(btn => {
    btn.onclick = () => {
        modal.classList.add('fade', 'show')
    }
})

inp.onfocus = () => {
    console.log('focus on me');
}

inp.onblur = () => {
    if(inp.value.length === 0)
    inp.style.borderColor = "red"
console.log('focus not on me');
}

close.forEach(btn => {
    btn.onclick = () => {
        modal.style.display = 'none'
        modal__dialog.style.display = 'none'
    }
})

let text = document.querySelectorAll(".tabcontent") 
let buttons = document.querySelectorAll(".tabheader__item") 

buttons.forEach((btn, inx) => { 
    btn.onclick = () => { 
        text.forEach(cont => cont.classList.add("hide")) 
        text[inx].classList.remove("hide") 
        
        buttons.forEach(item => item.classList.remove("tabheader__item_active")) 
        btn.classList.add("tabheader__item_active") 
    } 
})
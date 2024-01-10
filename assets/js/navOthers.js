const menu_btn = document.querySelector('.hamburger')
const menu = document.querySelector('.navigation')

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active')
    menu.classList.toggle('is-active')
})

const contact_btn = document.querySelector('.contact-btn')

contact_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('is-active')
    menu.classList.toggle('is-active')
})

const slideUp = document.querySelectorAll('.slide-up')

for(let i = 0; i < slideUp.length; i++){
    slideUp[i].addEventListener('click', function() {
        menu.classList.toggle('is-active')
        menu_btn.classList.toggle('is-active')
    })
}


// COLOR CHANGING SCROLL

//desktop
const scroll = document.querySelector("#changeScroll")
const menuName = document.querySelector('#menu')
function myDeskFunctions(y) {
    if (y.matches) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 694 && window.scrollY <= 1357 || window.scrollY >= 1830 && window.scrollY <= 2635 || window.scrollY >= 3504 && window.scrollY <= 4625 || window.scrollY >= 5092) {
                scroll.classList.add('scrolled')
                menuName.classList.add('scrolled')
            }
            else {
                scroll.classList.remove('scrolled')
                menuName.classList.remove('scrolled')
            }
        })
    }
}

let y = window.matchMedia("(min-width: 750px)")
myDeskFunctions(y)



// mobile
function myFunction(x) {
    if (x.matches) {
        window.addEventListener('scroll', () => {
        if (window.scrollY >= 314) {
            scroll.classList.add('scrolled')
            menuName.classList.add('scrolled')
        }
        else {
            scroll.classList.remove('scrolled')
            menuName.classList.remove('scrolled')
        }
    })
}
}

let x = window.matchMedia("(max-width: 700px)")
myFunction(x)


const navHeader = document.querySelector(".nav-button")
function myDeskFunction(z) {
    if (z.matches) {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80 ) {
                navHeader.style.backdropFilter = "blur(10px)"
            }
            else {
                navHeader.style.backdropFilter = "blur(0px)"
            }
            if (window.scrollY >= 380) {
                // navHeader.style.color = 'white'
                // navHeader.style.backgroundColor = '#3e75c8db'
                navHeader.classList.add('scroll-view')
                
            }
            else {
                navHeader.classList.remove('scroll-view')
            }
            
        })
    }
}

let z = window.matchMedia("(min-width: 750px)")
myDeskFunction(z)

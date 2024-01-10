const tr = document.querySelectorAll('.tr')
const plusBtn = document.querySelectorAll('.fa-circle-plus')
const paragraphs = document.querySelectorAll('.p')
let position = 0
// mobile variables
const mp = document.querySelectorAll('.mp')
const spaces = document.querySelectorAll('.space')

let len = plusBtn.length

// Define your media query
const mediaQuery = window.matchMedia("(min-width: 981px)");

// Function to apply the class when the media query matches
function applyClass() {
  if (mediaQuery.matches) {
    paragraphs[0].classList.add('appear');
    plusBtn[0].classList.add('spin');
  } else {
    // Remove the classes if the media query no longer matches
    paragraphs[0].classList.remove('appear');
    plusBtn[0].classList.remove('spin');
  }
}

// Initial application of the class based on the media query
applyClass();

// Add an event listener to reapply the class when the media query state changes
mediaQuery.addListener(applyClass);

for(let i = 0; i < len; i++){
    tr[i].addEventListener('click', function() {
        if(position === i){
            paragraphs[i].classList.toggle('appear')
            plusBtn[i].classList.toggle('spin')

            mp[i].classList.toggle('mobileToggle')
            if(i === 0) {
                spaces[i].classList.toggle('addSpace1')
            }
            else if(i === 1){
                spaces[i].classList.toggle('addSpace2')
            }
            else if(i === 2){
                spaces[i].classList.toggle('addSpace3')
            }
            else if(i === 3){
                spaces[i].classList.toggle('addSpace4')
            }
            else if(i === 4){
                spaces[i].classList.toggle('addSpace5')
            }
            else if(i === 5){
                spaces[i].classList.toggle('addSpace6')
            }
            else if(i === 6){
                spaces[i].classList.toggle('addSpace7')
            }
            else if(i === 7){
                spaces[i].classList.toggle('addSpace8')
            }
        }
        else{
            if(position >= 0 && position <= 7){
                paragraphs[position].classList.remove('appear')
                plusBtn[position].classList.remove('spin')

            }
            paragraphs[i].classList.add('appear')
            plusBtn[i].classList.add('spin')

            mp[i].classList.add('mobileToggle')

            if(i === 0) {
                spaces[i].classList.add('addSpace1')
            }
            else if(i === 1){
                spaces[i].classList.add('addSpace2')
            }
            else if(i === 2){
                spaces[i].classList.add('addSpace3')
            }
            else if(i === 3){
                spaces[i].classList.add('addSpace4')
            }
            else if(i === 4){
                spaces[i].classList.add('addSpace5')
            }
            else if(i === 5){
                spaces[i].classList.add('addSpace6')
            }
            else if(i === 6){
                spaces[i].classList.add('addSpace7')
            }
            else if(i === 7){
                spaces[i].classList.add('addSpace8')
            }
        }
        position = i
    })
}



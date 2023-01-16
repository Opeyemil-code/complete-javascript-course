'use strict';

const modal= document.querySelector('.modal');
const overlay =  document.querySelector('.overlay');
const btnCloseModal =  document.querySelector('.close-modal');
const btnsShowModel=  document.querySelectorAll('.show-modal');

console.log(btnsShowModel);


for (let i = 0; i < btnsShowModel.length; i++) {
  console.log(btnsShowModel[i].addEventListener('click',function name(params) {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden');               
  }))
}

const modalClose = function(params) {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}


btnCloseModal.addEventListener(
  'click', modalClose
  )

overlay.addEventListener(
  'click', modalClose
)


function level(e) {
   console.log(e.key)
   if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    modalClose()
   }
}

document.addEventListener(
  'keydown', level
)
let questions = document.querySelectorAll('.ques')
let icon1 = `<span class="material-symbols-outlined close">close</span>`
let icon2 = `<span class="material-symbols-outlined add">add</span>`
Array.from(questions).forEach((element)=>{
      element.addEventListener('click',()=>{
            if (element !== null) {
                  if (document.querySelector('.ans').classList.contains('ansNo')) {
                  document.querySelector('.ans').classList.remove('ansNo')
                  document.querySelector('.ans').classList.add('ansYes')
                  document.querySelector('.add').remove()
                  document.querySelector('.ques').insertAdjacentHTML('beforeend',icon1)
                  }
                  else {
                  document.querySelector('.ans').classList.remove('ansYes')
                  document.querySelector('.ans').classList.add('ansNo')
                  document.querySelector('.close').remove()
                  document.querySelector('.ques').insertAdjacentHTML('beforeend',icon2)
                  }
            }
      })
})
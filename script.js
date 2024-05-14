let questions = document.querySelectorAll('.ques');
let icon1 = `<span class="material-symbols-outlined close">close</span>`
let icon2 = `<span class="material-symbols-outlined add">add</span>`
Array.from(questions).forEach((element)=>{
      element.addEventListener('click',()=>{
            let answer = element.nextElementSibling;
            let icon = element.querySelector('.material-symbols-outlined');

            if (answer.classList.contains('ansNo')) {
                  answer.classList.remove('ansNo');
                  answer.classList.add('ansYes');
                  icon.remove()
                  element.insertAdjacentHTML('beforeend',icon1)
            }
            else {
                  answer.classList.remove('ansYes');
                  answer.classList.add('ansNo');
                  icon.classList.remove('close');
                  icon.classList.add('add');
                  icon.remove()
                  element.insertAdjacentHTML('beforeend',icon2)
              }
          });
      });
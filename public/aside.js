const h2 = document.querySelector('.closed')
const aside = document.querySelector('.side-bar')
const p = document.querySelector('.selectSpan')
const header = document.querySelector('.selectHeader')
const li = document.querySelectorAll('.list')

h2.addEventListener('click', ()=>{
  if(h2.classList.contains('closed') === true){
    h2.classList.add('open')
    h2.classList.remove('closed')
    aside.classList.add('displayNone')
    header.classList.add('openHeader')
    p.classList.add('spanClosed')
  }
})
p.addEventListener('click', ()=>{
    h2.classList.add('closed')
    h2.classList.remove('open')
    aside.classList.remove('displayNone')
    p.classList.remove('spanClosed')
    header.classList.remove('openHeader')
})

li.forEach(element =>{
  console.log(element)
  element.addEventListener('click', ()=>{
    element.classList.add('active')
  })
})
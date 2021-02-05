const h2 = document.querySelector('.closed')
const aside = document.querySelector('.side-bar')
const p = document.querySelector('.selectSpan')
h2.addEventListener('click', ()=>{
  if(h2.classList.contains('closed') === true){
    h2.classList.add('open')
    h2.classList.remove('closed')
    aside.classList.add('displayNone')
    p.classList.add('spanClosed')
  }
})
p.addEventListener('click', ()=>{
    h2.classList.add('closed')
    h2.classList.remove('open')
    aside.classList.remove('displayNone')
    p.classList.remove('spanClosed')
})
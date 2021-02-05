const h2 = document.querySelector('.closed')
const aside = document.querySelector('.side-bar')
const header = document.querySelectorAll('.selectHeader')
const span = document.querySelector('.selectSpan')
const footer = document.querySelector('footer')
h2.addEventListener('click', ()=>{
  if(h2.classList.contains('closed') === true){
    h2.classList.add('open')
    h2.classList.remove('closed')
    aside.classList.add('displayNone')
    footer.classList.add('openHeader')
    header.forEach(item =>(
      item.classList.add('openHeader')
    ))
    span.classList.add('spanClosed')
  }
})
span.addEventListener('click', ()=>{
    h2.classList.add('closed')
    h2.classList.remove('open')
    aside.classList.remove('displayNone')
    span.classList.remove('spanClosed')
    footer.classList.remove('openHeader')
    header.forEach(item =>(
      item.classList.remove('openHeader')
    ))
})
const h2 = document.querySelector('.closed')

h2.addEventListener('click', ()=>{
  h2.classList.add('open')
  h2.classList.remove('closed')
})
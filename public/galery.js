const elementos = document.querySelectorAll('.galeryEvent')

elementos.forEach(element =>{
  element.addEventListener('mouseover', ()=>{
    element.classList.add('galery-visible')
    element.classList.remove('galery-content')
  })
} )

elementos.forEach(element =>{
  element.addEventListener('mouseout', ()=>{
    element.classList.remove('galery-visible')
    element.classList.add('galery-content')
  })
} )
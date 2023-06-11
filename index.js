const serious = document.getElementById('serious')
const smile = document.getElementById('smile')
const forImage = document.getElementById('forImage')
let newImage = document.createElement('img')

serious.addEventListener('click', ()=> {
  if (forImage.hasChildNodes()) {
    forImage.removeChild(newImage)
  } 
    newImage = document.createElement('img')
    newImage.src = "seriedade.jpeg"
    forImage.appendChild(newImage)
  
})

smile.addEventListener('click', ()=> {
  if (forImage.hasChildNodes()) {
    forImage.removeChild(newImage)
  } 
    
    newImage = document.createElement('img')
    newImage.src = "felicidade.jpeg"
    forImage.appendChild(newImage)
  
})
// Remember to import the data and Dog class!
 import dogs from './data.js'
 import Dog from './Dog.js'


let currentDogIndex = 0
let currentDog = new Dog(dogs[currentDogIndex])

 function getNewDog() {
  currentDogIndex += 1
  currentDog = new Dog(dogs[currentDogIndex])
  render()
 }

 
 document.querySelector('#heart').addEventListener('click', function () {
  currentDog.likeDog()
  if (dogArray.length > 0) {
    setTimeout(function(){
      dog = getNewDog()
      render()
    }, 1000)   
  } else {
    setTimeout(function(){
      endApp()
    }, 1000)  
  }
 })

 document.querySelector('#cross').addEventListener('click', function () {
  currentDog.rejectDog() 
  if (dogArray.length > 0) {
    setTimeout(function(){
      currentDog = getNewDog()
      render()
    }, 1000)   
  } else {
    setTimeout(function(){
      endApp()
    }, 1000)
    
  }
 })

 function endApp() {
  document.querySelector('.bottom-buttons').style.display = "none"
  document.querySelector('.dog').innerHTML = `
    <div class="end-container">
      <h3 class="end-message"> Sorry, there are no more dogs in your area. </h3>
    </div>`
 }


 //let dog = getNewDog()

 function render() {
  document.querySelector('.dog').innerHTML = currentDog.getDogHtml()
 }


render()
 






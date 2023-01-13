// Remember to import the data and Dog class!
 import dogs from './data.js'
 import Dog from './Dog.js'


// is this right?

 let dogArray = dogs

 function getNewDog() {
  const nextDogData = dogArray.shift()
  return nextDogData ? new Dog(nextDogData) : {}
 }

 document.querySelector('#heart').addEventListener('click', function () {
  dog.likeDog()
 })

 document.querySelector('#cross').addEventListener('click', function () {
  dog.rejectDog() 
  // works --> console.log(getNewDog)
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

 function endApp() {
  document.querySelector('.bottom-buttons').style.display = "none"
  document.querySelector('.dog').innerHTML = `
    <div class="end-container">
      <h3 class="end-message"> Sorry, there are no more dogs in your area. </h3>
    </div>`
 }


 let dog = getNewDog()

 function render() {
  document.querySelector('.dog').innerHTML = dog.getDogHtml()
 }

//  let dog = getNewDog()
render()
 






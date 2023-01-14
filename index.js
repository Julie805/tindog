 import dogs from './data.js'
 import Dog from './Dog.js'

 let currentDogIndex = 0
 let currentDog = new Dog(dogs[currentDogIndex])


 function getNewDog() {
  currentDogIndex += 1
  currentDog = new Dog(dogs[currentDogIndex])
  render()
 }

 function startOver(){
  console.log("clicked")
  // currentDogIndex = 0
  // currentDog = new Dog(dogs[currentDogIndex])
  // currentDog.setMatchStatus(false)
 }

//Like dog
 document.querySelector('#heart').addEventListener('click', function () {
  currentDog.likeDog()
  if (currentDogIndex < dogs.length-1) {
    setTimeout(function(){
      getNewDog()
    }, 1000)   
  } else {
    setTimeout(function(){
      endApp()
    }, 1000)  
  }
 })

//Reject dog
 document.querySelector('#cross').addEventListener('click', function () {
  currentDog.rejectDog() 
  if (currentDogIndex < dogs.length-1) {
    setTimeout(function(){
      getNewDog()  
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
      <button class="start-over-btn" onclick="startOver()">Start Over</button>
    </div>`   
 }


 //document.querySelector(".start-over-btn").addEventListener("click", startOver)



 function render() {
  document.querySelector('.dog').innerHTML = currentDog.getDogHtml()
 }

render()
 






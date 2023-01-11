// Remember to import the data and Dog class!
 import dogs from './data.js'
 import Dog from './Dog.js'

// dogArray is set up so that it can be manipulated. Is there a way not to have this hard-coded though?

 let dogArray = dogs

// pulls out the first dog object available from dogsArray or renders a new one

const dog = new Dog(dogs[0])

 function getNewDog() {
  const nextDogData = dogArray.shift()
  return nextDogData 
 }
 //  new Dog(nextDogData) : {}


 function renderDog() {
  document.querySelector('.dog').innerHTML = dog.getDogHtml()
 }

//  let dog = getNewDog()
renderDog()
 






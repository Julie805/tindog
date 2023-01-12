// Remember to import the data and Dog class!
 import dogs from './data.js'
 import Dog from './Dog.js'

// dogArray is set up so that it can be manipulated. Is there a way not to have this hard-coded though?

let dogArray = dogs
// dog works to render first dog, but would be better to have a getNewDog() as its value, and that function finds both the first dog and all the other dogs.
const dog = new Dog(dogs[0])

 //currently unused
 function getNewDog() {
  const nextDogData = dogArray.shift()
  return nextDogData 
 }
 //  new Dog(nextDogData) : {}

 document.querySelector('#heart').addEventListener('click', function () {
  likeDog()
 })

 document.querySelector('#cross').addEventListener('click', function () {
  unlikeDog() 
 })

 function likeDog () {
  document.querySelector('.like-badge').style.display = "block"
  document.querySelector('.nope-badge').style.display = "none"
 }

 function unlikeDog () {
  document.querySelector('.nope-badge').style.display = "block"
  document.querySelector('.like-badge').style.display = "none"
 }


 function render() {
  document.querySelector('.dog').innerHTML = dog.getDogHtml()
 }

//  let dog = getNewDog()
render()
 






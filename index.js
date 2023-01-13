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
    }, 1200)
    
  } else {
    console.log("no more dogs")
  }
 })


 let dog = getNewDog()

 function render() {
  document.querySelector('.dog').innerHTML = dog.getDogHtml()
 }

//  let dog = getNewDog()
render()
 






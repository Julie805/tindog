class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
  
  //Badges are set to display none until a button is clicked
  getDogHtml () {
    const {avatar, name, age, bio, hasBeenSwiped, hasBeenLiked} = this
    return `
      <img class="dog-img" src="${avatar}" alt="dog-image">
      <img class="like-badge" src= "./images/badge-like.png" alt="like-badge" />
      <img class="nope-badge" src= "./images/badge-nope.png" alt="nope-badge" />
      <h3 class="dog-id">${name}, ${age}</h3>
      <p class="dog-bio">${bio}</p>
      `
   } 

   
   likeDog () {
    document.querySelector('.like-badge').style.display = "block"
    document.querySelector('.nope-badge').style.display = "none"
    this.hasBeenSwiped = true
    this.hasBeenLiked = true
   }
  
   rejectDog () {
    document.querySelector('.nope-badge').style.display = "block"
    document.querySelector('.like-badge').style.display = "none"
    this.hasBeenSwiped = true
   }

  
}


export default Dog
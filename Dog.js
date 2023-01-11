class Dog {
  constructor(data) {
    Object.assign(this, data)
  }
  
  getDogHtml () {
    const {avatar, name, age, bio} = this
    return `
      <img class="dog-img" src="${avatar}" alt="dog-image">
      <h3 class="dog-id">${name}, ${age}</h3>
      <p class="dog-bio">${bio}</p>  
      `
   } 
}

export default Dog
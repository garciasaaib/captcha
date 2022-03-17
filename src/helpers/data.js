// Import Database
const database = require("./imagenes.json")

function generateImagesObject() {
  // Define random category
  const randomCategory = randomfrom(0,4)
  const category = database.categories[randomCategory]
  var imagesArray = [];
  var imagesObject = {};
  
  
  // Define Random images from category defined
  let index = randomfrom(0,8);
  imagesArray[index] = database.images[randomCategory][randomfrom(0,19)];
  for(let i = 1; i < 4; i++){
      while( imagesArray[index] ){
          index = randomfrom(0,8);
      }
      imagesArray[index] = database.images[randomCategory][randomfrom(0,19)];
  }
  
  
  // Define Random images from other categories
  //randomFalseCat = randomCategory;
  for(let i = 0; i <= 8; i++){
      let randomFalseCat = randomfrom(0,4)
      while(randomFalseCat == randomCategory){
          randomFalseCat = randomfrom(0,4)    
      }
  
      if( !imagesArray[i]){
          imagesArray[i] = database.images[randomFalseCat][randomfrom(0,19)];
      }
  }
  
  // Build JSON to export
  
  imagesObject.category = category;
  imagesObject.images = imagesArray;
  // export default imagesObject;
  return imagesObject;
}
export default generateImagesObject;
// Support Function
function randomfrom(min, max) {
  var randomNumber = Math.floor(Math.random() * ++max + min)
  return randomNumber;
}
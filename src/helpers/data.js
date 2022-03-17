// Import Database
const database = require("./imagenes.json")

function generateImagesObject() {
  // Define random category
  const randomCategory = randomfrom(0, 4)
  const category = database.categories[randomCategory]
  var imagesArray = [];
  var imagesObject = {};


  // Define Random images from category defined
  var index = randomfrom(0, 8);
  imagesArray[index] = database.images[randomCategory][randomfrom(0, 19)];
  for (let i = 1; i <= 4; i++) {
    while (imagesArray[index]) {
      index = randomfrom(0, 8);
    }
    imagesArray[index] = database.images[randomCategory][randomfrom(0, 19)];
  }


  // Define Random images from other categories
  var randomFalseCat = randomCategory;
  for (let i = 0; i <= 8; i++) {
    while (randomFalseCat === randomCategory) {
      randomFalseCat = randomfrom(0, 4)
      // console.log("2nd While")
    }

    if (!imagesArray[i]) {
      imagesArray[i] = database.images[randomFalseCat][randomfrom(0, 19)];
    }
  }

  // Build JSON to export

  imagesObject.category = category;
  imagesObject.images = imagesArray;

  // Export JSON object {"Categoy":"xxx","images":["","","","","","","","",""]}

  // export default imagesObject;
  return imagesObject;
}
export default generateImagesObject;
// Support Function
function randomfrom(min, max) {
  var randomNumber = Math.floor(Math.random() * ++max + min)
  return randomNumber;
}
const fs = require('fs')
const faker = require('faker')

let productCount = 1001;
let productString = '';
let featureString = '';
let photoString = '';
let cartString = '';
let ratingString = '';
let styleString = '';

//Products

for(var i = 1; i <= productCount; i++) {
  let id = i;
  let name = faker.commerce.productName();
  let description = faker.commerce.productDescription();
  let category = faker.commerce.department();
  let defaultPrice = faker.commerce.price();
  productString += `${name}, ${description}, ${category}, ${defaultPrice.toString()} \n`
}

fs.writeFile('./fakeProductData.csv', productString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product data`)
  }
})

//Product Features

for(var i = 1; i <= productCount * 3; i++) {
  let id = Math.ceil(Math.random() * productCount + 1);
  let feature = faker.commerce.productMaterial();
  let value = faker.commerce.productAdjective();
  let productId = i;
  featureString += `${id}, ${productId}, ${feature}, ${value} \n`
}

fs.writeFile('./fakeFeatureData.csv', featureString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product feature data`)
  }
})

//Product Styles

for(var i = 1; i <= productCount * 3; i++) {
  let id = Math.ceil(Math.random() * productCount + 1);
  let productId = Math.ceil(Math.random() * productCount + 1);
  let name = faker.commerce.productName();
  let originalPrice = faker.commerce.price();
  let salePrice = faker.commerce.price();
  let default =  Math.floor(Math.random() * 2);
  styleString += `${id}, ${productId}, ${name}, ${originalPrice}, ${salePrice}, ${default} \n`
}
fs.writeFile('./fakeStyleData.csv', styleString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product feature data`)
  }
})

//Product Photos

for(var i = 1; i <= productCount * 3; i++) {
  let id = i;
  let productId = Math.ceil(Math.random() * productCount + 1);
  let thumbnail_url = faker.image.imageUrl();
  let photo_url = thumbnail_url
  photoString += `${id}, ${productId}, ${thumbnail_url}, ${photo_url} \n`
}

fs.writeFile('./fakePhotoData.csv', photoString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake photo data`)
  }
})

//Cart Data

for(var i = 1; i <= productCount; i++) {
  let id = i;
  let user = Math.ceil(Math.random() * productCount + 1);
  let productId = Math.ceil(Math.random() * productCount + 1);
  let active = Math.floor(Math.random() * 2);
  cartString += `${id}, ${user}, ${productId}, ${active} \n`
}

fs.writeFile('./fakeCartData.csv', cartString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake cart data`)
  }
})

//Star Ratings

for(var i = 1; i <= productCount; i++) {
  let id = i;
  let productId = Math.ceil(Math.random() * productCount + 1);
  let oneStar = Math.floor(Math.random() * 100);
  let twoStar = Math.floor(Math.random() * 100);
  let threeStar = Math.floor(Math.random() * 100);
  let fourStar = Math.floor(Math.random() * 100);
  let fiveStar = Math.floor(Math.random() * 100);
  ratingString += `${id}, ${productId}, ${oneStar}, ${twoStar}, ${threeStar}, ${fourStar}, ${fiveStar} \n`
}

fs.writeFile('./fakeRatingData.csv', ratingString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake rating data`)
  }
})


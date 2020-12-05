const fs = require('fs')
const faker = require('faker')

let productCount = 1001;
let productString = '';
let featureString = '';
let photoString = '';
let cartString = '';
let ratingString = '';
let styleString = '';
let skuString = '';

//Products + Features

for(var i = 1; i <= productCount; i++) {
  let id = i;
  let name = faker.commerce.productName();
  let description = faker.commerce.productDescription();
  let category = faker.commerce.department();
  let defaultPrice = faker.commerce.price();
  let numberOfFeatures = Math.ceil(Math.random() * 4)
  for(var j = 1; j <= numberOfFeatures; j++) {
    let productId = i;
    let feature = faker.commerce.productMaterial();
    let value = faker.commerce.productAdjective();
    featureString += `${productId}, ${feature}, ${value} \n`
  }
  productString += `${name}, ${description}, ${category}, ${defaultPrice.toString()} \n`
}

fs.writeFile('./fakeProductData.csv', productString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product data`)
  }
})

fs.writeFile('./fakeFeatureData.csv', featureString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product feature data`)
  }
})

//Product Styles
for(let i = 1; i <= productCount; i++) {
  let numberOfStyles = Math.ceil(Math.random() * 4)
  let default =  1
  let productId = i
  // style information
  for(let j = 1; j <= numberOfStyles; j++) {
    let name = faker.commerce.productName();
    let originalPrice = faker.commerce.price();
    let salePrice = faker.commerce.price();
    if(salePrice > originalPrice) {
      salePrice = originalPrice / 2;
    }
    styleString += `${productId}, ${j} ${name}, ${originalPrice}, ${salePrice}, ${default} \n`;
    default = 0;

    //style photos
    let photoCount = Math.ceil(Math.random() * 4);
    for(let k = 1; k <= photoCount * 3; k++) {
      let thumbnail_url = faker.image.imageUrl();
      let photo_url = thumbnail_url
      photoString += `${productId}, ${thumbnail_url}, ${photo_url} \n`
    }
    
    //style sku
    let type = Math.ceil(Math.random() * 2);
    let count = Math.ceil(Math.random() * 4);
    let shirt = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
    let shoes = ['5', '6', '7', '8', '9', '10', '11', '12', '13']
    for(let m = 1; m < count; m++) {
      if(type === 1) {
        for(let n = 0; n < shirt.length; n++) {
          let quantity = Math.floor(Math.random() * 100);
          skuString += `${productId}, ${n + 1}, ${shirt[k]}, ${quantity} \n`
        }
      } else {
        for(let p = 0; p < shoes.length; p++) {
          let quantity = Math.floor(Math.random() * 100);
          skuString += `${productId}, ${p + 1}, ${shoes[n]}, ${quantity} \n`
        }
      }
    }
  }
}
fs.writeFile('./fakeStyleData.csv', styleString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product style data`)
  }
})

//Product Skus
// var skus = function() {
//   let shirt = ['XS', 'S', 'M', 'L', 'XL', 'XXL']
//   let shoes = ['5', '6', '7', '8', '9', '10', '11', '12', '13']
//   for(var i = 1; i <= productCount; i++) {
//     let type = Math.ceil(Math.random() * 2);
//     let count = Math.ceil(Math.random() * 4);
//     for(var j = 1; j < count; j++) {
//       let productId = i;
//       if(type === 1) {
//         for(var k = 0; k < shirt.length; k++) {
//           let quantity = Math.floor(Math.random() * 100);
//           skuString += `${productId}, ${k + 1}, ${shirt[k]}, ${quantity} \n`
//         }
//       } else {
//         for(var n = 0; n < shoes.length; n++) {
//           let quantity = Math.floor(Math.random() * 100);
//           skuString += `${productId}, ${n + 1}, ${shoes[n]}, ${quantity} \n`
//         }
//       }
//     }
//   }
// }
// skus()

fs.writeFile('./fakeSkuData.csv', skuString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product sku data`)
  }
})

//Product Photos

// for(var i = 1; i <= productCount * 3; i++) {
//   let id = i;
//   let productId = Math.ceil(Math.random() * productCount + 1);
//   let thumbnail_url = faker.image.imageUrl();
//   let photo_url = thumbnail_url
//   photoString += `${id}, ${productId}, ${thumbnail_url}, ${photo_url} \n`
// }

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
  let productId = i
  let oneStar = Math.floor(Math.random() * 100);
  let twoStar = Math.floor(Math.random() * 100);
  let threeStar = Math.floor(Math.random() * 100);
  let fourStar = Math.floor(Math.random() * 100);
  let fiveStar = Math.floor(Math.random() * 100);
  ratingString += `${productId}, ${oneStar}, ${twoStar}, ${threeStar}, ${fourStar}, ${fiveStar} \n`
}

fs.writeFile('./fakeRatingData.csv', ratingString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake rating data`)
  }
})


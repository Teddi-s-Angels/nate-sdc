const fs = require('fs')
const faker = require('faker')

let startTime = Date.now()

let productCount = 1000001;
let productString = 'product_id, product_name, slogan, product_description, category, default_price \n';
let featureString = 'product_id, feature, feature_value \n';
let photoString = 'product_id, thumbnail_url, photo_url \n';
let cartString = 'user_session, product_id, active \n';
let ratingString = 'product_id, one_star, two_star, three_star, four_star, five_star \n';
let styleString = 'product_id, product_style_id, style_name, original_price, sale_price, default?';
let skuString = 'product_id, style_id, size, quantity';

//Products + Features

for(let i = 1; i <= productCount; i++) {
  let id = i;
  let name = faker.commerce.productName();
  let slogan = faker.lorem.sentence()
  let description = faker.commerce.productDescription();
  let category = faker.commerce.department();
  let defaultPrice = faker.commerce.price();
  let numberOfFeatures = Math.ceil(Math.random() * 3)
  let productId = i;
  for(let j = 1; j <= numberOfFeatures; j++) {
    let feature = faker.commerce.productMaterial();
    let value = faker.commerce.productAdjective();
    featureString += `${productId}, ${feature}, ${value} \n`
  }
  productString += `${productId}, ${name}, ${slogan}, ${description}, ${category}, ${defaultPrice.toString()} \n`
}

fs.writeFile('./fakeData/fakeProductData.csv', productString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product data`)
  }
})

fs.writeFile('./fakeData/fakeFeatureData.csv', featureString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product feature data`)
  }
})

//Product Styles
for(let i = 1; i <= productCount; i++) {
  let numberOfStyles = Math.ceil(Math.random() * 2)
  let isDefault =  1
  let productId = i
  // style information
  for(let j = 1; j <= numberOfStyles; j++) {
    let name = faker.commerce.productName();
    let originalPrice = faker.commerce.price();
    let salePrice = faker.commerce.price();
    if(salePrice > originalPrice) {
      salePrice = originalPrice / 2;
    }
    styleString += `${i + j - 1} ${productId}, ${j} ${name}, ${originalPrice}, ${salePrice}, ${isDefault} \n`;
    isDefault = 0;

    //style photos
    let photoCount = Math.ceil(Math.random() * 3);
    for(let k = 1; k <= photoCount; k++) {
      let thumbnail_url = faker.image.imageUrl();
      let photo_url = thumbnail_url
      photoString += `${productId}, ${thumbnail_url}, ${thumbnail_url} \n`
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
          skuString += `${productId}, ${j}, ${shirt[n]}, ${quantity} \n`
        }
      } else {
        for(let p = 0; p < shoes.length; p++) {
          let quantity = Math.floor(Math.random() * 100);
          skuString += `${productId}, ${j}, ${shoes[p]}, ${quantity} \n`
        }
      }
    }
  }
}
fs.writeFile('./fakeData/fakeStyleData.csv', styleString, (err) => {
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

fs.writeFile('./fakeData/fakeSkuData.csv', skuString, (err) => {
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

fs.writeFile('./fakeData/fakePhotoData.csv', photoString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake photo data`)
  }

})

//Cart Data

for(let i = 1; i <= productCount; i++) {
  let id = i;
  let user = Math.ceil(Math.random() * productCount + 1);
  let productId = Math.ceil(Math.random() * productCount + 1);
  let active = Math.floor(Math.random() * 2);
  cartString += `${id}, ${user}, ${productId}, ${active} \n`
}

fs.writeFile('./fakeData/fakeCartData.csv', cartString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake cart data`)
  }
})

//Star Ratings

for(let i = 1; i <= productCount; i++) {
  let productId = i
  let oneStar = Math.floor(Math.random() * 100);
  let twoStar = Math.floor(Math.random() * 100);
  let threeStar = Math.floor(Math.random() * 100);
  let fourStar = Math.floor(Math.random() * 100);
  let fiveStar = Math.floor(Math.random() * 100);
  ratingString += `${productId}, ${oneStar}, ${twoStar}, ${threeStar}, ${fourStar}, ${fiveStar} \n`
}

fs.writeFile('./fakeData/fakeRatingData.csv', ratingString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake rating data`)
  }
  setTimeout(function(){
    let passed_time = Date.now() - startTime;
    console.log(passed_time)
  }, 1)
})




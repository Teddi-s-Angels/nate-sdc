const fs = require('fs')
const faker = require('faker')

let startTime = Date.now()

let productCount = 2500000;
let productString = '';
let featureString = '';
let photoString = '';
let cartString = '';
let ratingString = '';
let styleString = '';
let skuString = '';

//Products + Features

for(let i = 1; i <= productCount; i++) {
  let productId = i + 7500000;
  let id = i;
  let name = faker.commerce.productName();
  let slogan = faker.lorem.sentence();
  let description = faker.lorem.paragraph();
  let category = faker.commerce.department();
  let defaultPrice = faker.commerce.price();
  let numberOfFeatures = Math.ceil(Math.random() * 3);
  for(let j = 1; j <= numberOfFeatures; j++) {
    let feature = faker.commerce.productMaterial();
    let value = faker.commerce.productAdjective();
    featureString += `${productId}, ${feature}, ${value} \n`;
  }
  productString += `${productId}, ${name}, ${slogan}, ${description}, ${category}, ${defaultPrice.toString()} \n`;
}

fs.appendFile('./fakeData/fakeFeatureData.csv', featureString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product feature data`)
  }
})

fs.appendFile('./fakeData/fakeProductData.csv', productString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product data`)
  }
})

// Product Styles
for(let i = 1; i <= productCount; i++) {
  let numberOfStyles = Math.ceil(Math.random() * 2)
  let isDefault =  1
  let productId = i + 7500000
  // style information
  for(let j = 1; j <= numberOfStyles; j++) {
    let name = faker.commerce.productName();
    let originalPrice = faker.commerce.price();
    let salePrice = faker.commerce.price();
    if(salePrice > originalPrice) {
      salePrice = originalPrice / 2;
    }
    styleString += `${productId}, ${j}, ${name}, ${originalPrice}, ${salePrice}, ${isDefault} \n`;
    isDefault = 0;
    // style photos
    let photoCount = Math.ceil(Math.random() * 3);
    for(let k = 1; k <= photoCount; k++) {
      let thumbnail_url = faker.image.imageUrl();
      let photo_url = thumbnail_url
      photoString += `${productId}, ${thumbnail_url}, ${thumbnail_url}, ${j} \n`
    }
    
    // style sku
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
fs.appendFile('./fakeData/fakeStyleData.csv', styleString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product style data`)
  }
})

fs.writeFile('./fakeData/fakeFeatureData.csv', featureString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product feature data`)
  }
})

fs.appendFile('./fakeData/fakeSkuData.csv', skuString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake product sku data`)
  }
})

//Cart Data

for(let i = 1; i <= productCount; i++) {
  let id = i + 9000001;
  let user = Math.ceil(Math.random() * (productCount+id));
  let productId = Math.ceil(Math.random() * (productCount+id));
  let active = Math.floor(Math.random() * 2);
  cartString += `${id}, ${user}, ${productId}, ${active} \n`
}

fs.appendFile('./fakeData/fakeCartData.csv', cartString, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log(`successfully generated fake cart data`)
  }
})

// Star Ratings

for(let i = 1; i <= productCount; i++) {
  let productId = i + 5000000;
  let oneStar = Math.floor(Math.random() * 100);
  let twoStar = Math.floor(Math.random() * 100);
  let threeStar = Math.floor(Math.random() * 100);
  let fourStar = Math.floor(Math.random() * 100);
  let fiveStar = Math.floor(Math.random() * 100);
  ratingString += `${productId}, ${oneStar}, ${twoStar}, ${threeStar}, ${fourStar}, ${fiveStar} \n`
}

fs.appendFile('./fakeData/fakeRatingData.csv', ratingString, (err) => {
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


// Headers

// let productString = 'product_id, product_name, slogan, product_description, category, default_price \n';
// let featureString = 'feature_id, product_id, feature, feature_value \n';
// let photoString = 'photo_id, product_id, thumbnail_url, photo_url \n';
// let cartString = 'cart_id, user_session, product_id, active \n';
// let ratingString = 'meta_id, product_id, one_star, two_star, three_star, four_star, five_star \n';
// let styleString = 'product_id, product_style_id, style_name, original_price, sale_price, isdefault \n';
// let skuString = 'sku_id, product_id, style_id, size, quantity \n';




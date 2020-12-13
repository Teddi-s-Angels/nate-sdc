import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
  vus: 1000,
  duration: '1m',
  rps: 1000,
  thresholds: {
    'failed requests': ['rate<0.1'], 
    http_req_duration: ['p(95)<2000'], 
  }
}

// product and features route

export default function () {
  let id = Math.ceil(Math.random() * 10000000)
  http.get(`http://127.0.0.1:3002/products/${id}`);
}

// product list route with limit

// export default function () {
//   let limit = Math.ceil(Math.random() * 100)
//   http.get(`http://127.0.0.1:3002/products/list/${id}`);
// }

// product styles, photos, and skus route

// export default function () {
//   let id = Math.ceil(Math.random() * 10000000)
//   http.get(`http://127.0.0.1:3002/products/${id}/styles`);
// }

// star ratings route

// export default function () {
//   let id = Math.ceil(Math.random() * 10000000)
//   http.get(`http://127.0.0.1:3002/reviews/${id}/meta`);
// }

// user carts route

// export default function () {
//   let userSession = Math.ceil(Math.random() * 10000000)
//   http.get(`http://127.0.0.1:3002/cart/${userSession}`);
// }
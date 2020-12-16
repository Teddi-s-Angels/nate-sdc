import http from 'k6/http';
import {sleep} from 'k6';

export let options = {
  duration: '30s',
  vus: 1000,
  rps: 1000,
  thresholds: {
    'failed requests': ['rate<0.1'], 
    http_req_duration: ['p(95)<2000'], 
  },
  // stages: [
  //   { duration: '2m', target: 100 }, // below normal load
  //   { duration: '5m', target: 100 },
  //   { duration: '2m', target: 200 }, // normal load
  //   { duration: '5m', target: 200 },
  //   { duration: '2m', target: 300 }, // around the breaking point
  //   { duration: '5m', target: 300 },
  //   { duration: '2m', target: 400 }, // beyond the breaking point
  //   { duration: '5m', target: 400 },
  //   { duration: '10m', target: 0 }, // Recovery stage.
  // ],
}

// product and features route`http://127.0.0.1:3002/products/${id}`

// export default function () {
//   const baseURL = 'http://127.0.0.1:3002/'
//   let id = Math.ceil(Math.random() * 10000000)
//   http.batch([
//     [
//       'GET', 
//       `${baseURL}products/${id}`
//     ],
//     [
//       'GET', 
//       `${baseURL}products/${id}/styles`
//     ],
//     [
//       'GET', 
//       `${baseURL}reviews/${id}/meta`
//     ],
//     [
//       'GET', 
//       `${baseURL}cart/${id}`
//     ],
//   ]);

//   sleep(1);
// }

// product list route with limit

// export default function () {
//   let limit = Math.ceil(Math.random() * 100)
//   http.get(`http://127.0.0.1:3002/products/list/${limit}`);
// }

// product styles, photos, and skus route

export default function () {
  let id = Math.ceil(Math.random() * 10000000)
  http.get(`http://127.0.0.1:3002/products/${id}/styles`);
}

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
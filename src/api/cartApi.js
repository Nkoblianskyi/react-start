import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:7070';

export const fetchCartItems = () =>
axios('/cart').then((res) => res.data);

export const deleteItem = (id) => 
axios.delete(`/cart/${id}`);

export const addItem = (newItem) => 
axios.post('/cart', newItem).then((res) => res.data);

export const updateItem = (id, updateItem) =>
    axios.patch(`/cart/${id}`, updateItem).then((res) => res.data); 
// const errorHandler = (res) =>{ 
//     if (res.status !== 200) {
//         throw new Error(res.statusText);
//     } else {
//         return res.json();
//     }
// };

// export const fetchCartItems = () => 
// fetch('http://localhost:8080/cart').then(errorHandler);

// export const deleteItem = (id) => 
// fetch(`http://localhost:3000/cart/${id}`, {
//     method: 'DELETED',
// }); 

// export const addItem = (newItem) => 
// fetch('http://localhost:8080/cart', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json',
//     },
//     body: JSON.stringify(newItem),
// }).then(errorHandler);
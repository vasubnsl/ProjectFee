// Storing data in Local Storage
let products = [
    {
    name: "Mobile",
    price: 10000,
    quantity: 50
},
{
    name: "Laptop",
    price: 50000,
    quantity: 10
}
];
let users = [
    {
    name: "John",
    email: "john@mail.com",
    phone: 1234567890
},
{
    name: "Jane",
    email: "jane@mail.com",
    phone: 1234567890
}
];
localStorage.setItem('products', JSON.stringify(products));
localStorage.setItem('users', JSON.stringify(users));
// Retrieving data from Local Storage
localStorage.getItem('products');
localStorage.getItem('users');

let productData=JSON.parse(localStorage.getItem('products'));
let userData=JSON.parse(localStorage.getItem('users'));
console.log(productData);

/*// Removing data from Local Storage
localStorage.removeItem('products');
// Clearing the entire Local Storage
localStorage.clear();*/

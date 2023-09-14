let myform=document.getElementById('myform');
myform.addEventListener('submit',function(e){
    e.preventDefault();
    let name=document.getElementById('name').value;
    let price=document.getElementById('price').value;
    let quantity=document.getElementById('quantity').value;
    let product={
        name,
        price,
        quantity
    }
    let products;
    if(localStorage.getItem('products')===null){
        products=[];
    }
    else{
        products=JSON.parse(localStorage.getItem('products'));
        let existingProductIndex = products.findIndex((p) => p.name === name);
        if (existingProductIndex !== -1) {
            // If it exists, update the existing product
            products[existingProductIndex] = product;
        } else {
            // If it doesn't exist, add it to the products array
            products.push(product);
        }
    }
    //products.push(product);
    localStorage.setItem('products',JSON.stringify(products));
    display();
    myform.reset();
}
)

function display(){
    let products=JSON.parse(localStorage.getItem('products'));
    let tablebody=document.getElementById('tablebody');
    tablebody.innerHTML='';
    products.forEach(function(product,index){
        let html=`<tr>
        <td>${index+1}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.quantity}</td>
        <td><button onclick="deleteproduct(${index})" class="btn btn-danger">Delete</button></td>
        </tr>`;
        tablebody.innerHTML+=html;
    })
}
display();
function deleteproduct(index){
    let products=JSON.parse(localStorage.getItem('products'));
    products.splice(index,1);
    localStorage.setItem('products',JSON.stringify(products));
    display();
}
let search=document.getElementById('search');
search.addEventListener('input',function(){
    let searchvalue=search.value;
    let products=JSON.parse(localStorage.getItem('products'));
    let tablebody=document.getElementById('tablebody');
    let html='';
    products.forEach(function(product,index){
        if(product.name.toLowerCase().includes(searchvalue.toLowerCase())){
            html+=`<tr>
            <td>${index+1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.quantity}</td>
            <td><button onclick="deleteproduct(${index})" class="btn btn-danger">Delete</button></td>
            </tr>`;
        }
    })
    tablebody.innerHTML=html;
}
)
let clear=document.getElementById('clear');
clear.addEventListener('click',function(){
    localStorage.clear();
    display();
}
)


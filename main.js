var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc"); 

var productsContainer = [];

if(localStorage.getItem("myproject")!=null){
    productsContainer=JSON.parse(localStorage.getItem("myproject"))
    displayProducts(productsContainer)
}else{
    productsContainer=[];
}

function addProduct(){
    var product = {
        name: productName.value,
        price: productPrice.value,
        cat: productCategory.value,
        desc: productDesc.value,
    }
    productsContainer.push(product);
    localStorage.setItem("myproject",JSON.stringify(productsContainer)) //localStorage before displayproduct()
    displayProducts(productsContainer); // hoisted func 
    clear();  // hoisted func
}


function displayProducts(list){
    var snadok = ``
    for (let i = 0; i < list.length; i++){
        snadok += `
        <tr>
            <td>${i}</td>
            <td>${list[i].name}</td> 
            <td>${list[i].price}</td>
            <td>${list[i].cat}</td>
            <td>${list[i].desc}</td>
        </tr>`
        
    }
    document.getElementById("tbody").innerHTML = snadok;
}

function search(searchterm){
    var searchResult = [];
    for (let i = 0; i<productsContainer.length; i++){
        if (productsContainer[i].name.toLowerCase().includes(searchterm.toLowerCase())== true){
            searchResult.push(productsContainer[i]);
        }
    } 
    displayProducts(searchResult);
}


function clear(){
    productName.value = '',
    productPrice.value = '',
    productCat.value = '',
    productDesc.value = ''
}
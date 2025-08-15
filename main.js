var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc");
 
var productsContainer = [];

function addProduct(){
    var product = {
        name: productName.value,
        price: productPrice.value,
        cat: productCategory.value,
        desc: productDesc.value,
    }
    productsContainer.push(product);
    displayProducts(); // hoisted func 
    clear();
}

function clear(){
    productName.value = '',
    productPrice.value = '',
    productCat.value = '',
    productDesc.value = ''
}

function displayProducts(){
    var snadok = ``
    for (let i = 0; i < productsContainer.length; i++){
        snadok += `
        <tr>
            <td>${$i}</td>
            <td>${productsContainer[i].name}</td> 
            <td>${productsContainer[i].price}</td>
            <td>${productsContainer[i].cat}</td>
            <td>${productsContainer[i].desc}</td>
        </tr>`
        
    }
    document.getElementById("tbody").innerHTML = snadok;
}


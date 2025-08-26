var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCategory");
var productDesc = document.getElementById("productDesc"); 

var productsContainer = [];
var addbtn = document.getElementById("addbtn");
var updatebtn = document.getElementById("updatebtn");

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
        cat: productCat.value,
        desc: productDesc.value,
    }
    productsContainer.push(product);
    localStorage.setItem("myproject",JSON.stringify(productsContainer)) //localStorage.setItem() u should write before displayproduct()
    displayProducts(productsContainer); 
    clear();  
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
            <td><button type="button" onclick="deleteProduct(${i});" class="btn bg-danger mt-3">Delete</button></td>
            <td><button type="button" onclick="setFormUpdate(${i});" class="btn bg-success mt-3">Update</button></td>

        </tr>`
        
    }
    document.getElementById("tbody").innerHTML = snadok;
}

function clear(){
    productName.value = '';
    productPrice.value = '';
    productCat.value = '';
    productDesc.value = '';
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


function deleteProduct(deleteIndex){
    productsContainer.splice(deleteIndex,1);
    localStorage.setItem("myproject",JSON.stringify(productsContainer)); 
    displayProducts(productsContainer);
}

function setFormUpdate(updateIndex){
    productName.value = productsContainer[updateIndex].name;
    productPrice.value = productsContainer[updateIndex].price;
    productCat.value = productsContainer[updateIndex].cat;
    productDesc.value = productsContainer[updateIndex].desc;
    updatebtn.classList.replace('d-none','d-inline-block');
    addbtn.classList.add('d-none');

    currentUpdateIndex = updateIndex;
}

updatebtn.onclick = function() {
    if (currentUpdateIndex !== null) {
        productsContainer[currentUpdateIndex] = {
            name: productName.value,
            price: productPrice.value,
            cat: productCat.value,
            desc: productDesc.value,
        };
        localStorage.setItem("myproject", JSON.stringify(productsContainer));
        displayProducts(productsContainer);
        clear();
        updatebtn.classList.replace('d-inline-block','d-none');
        addbtn.classList.remove('d-none');
        currentUpdateIndex = null;
    }
}



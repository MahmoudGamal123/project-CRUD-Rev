var productContainer = [];

if (localStorage.getItem("ourProduct") != null) {
  productContainer = JSON.parse(localStorage.getItem("ourProduct"));
  displayProduct();
}

let productName = document.getElementById("productName");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let productDesc = document.getElementById("productDesc");
let mainBtn = document.getElementById('mainId')
let state = 0
// Add Function

function add(){
    if (mainBtn.innerHTML=='Add Product') {
        abbProduct()
    }else{
        addUpdate()
    }
}

function abbProduct() {
  let product = {
    name: productName.value,
    price: productPrice.value,
    category: productCategory.value,
    description: productDesc.value,
  };
  productContainer.push(product);
  localStorage.setItem("ourProduct", JSON.stringify(productContainer));
  console.log(productContainer);
  displayProduct();
     clearproduct()
}







// clear function
function clearproduct() {
  productName.value = "";
  productPrice.value = "";
  productCategory.value = "";
  productDesc.value = "";
}

// display product

function displayProduct() {
  let cartoona = ``;
  for (let i = 0; i < productContainer.length; i++) {
    cartoona += `<tr>
                    <td>${[i]}</td>
                    <td>${productContainer[i].name}</td>
                    <td>${productContainer[i].price}</td>
                    <td>${productContainer[i].category}</td>
                    <td>${productContainer[i].description}</td> 
                    <td><button onclick='deleteProduct(${i})' class="btn btn-danger">Delete</button></td> 
                    <td><button onclick='updateProduct(${i})' class="btn btn-warning">Update</button></td> 
                    
                </tr>`;
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}



// Delete Product

function deleteProduct(index) {
  productContainer.splice(index, 1);
  localStorage.setItem("ourProduct", JSON.stringify(productContainer));
  displayProduct();
}
// search Product
function searchProduct(term) {
  let cartoona = ``;
  for (let i = 0; i < productContainer.length; i++) {
    if (
      productContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==
      true
    ) {
      cartoona += `<tr>
        <td>${[i]}</td>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].price}</td>
        <td>${productContainer[i].category}</td>
        <td>${productContainer[i].description}</td> 
        <td><button onclick='deleteProduct(${i})' class="btn btn-danger">Delete</button></td> 
        <td><button onclick='updateProduct(${i})' class="btn btn-warning">Update</button></td> 
        
    </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
  }
}


function updateProduct(index){
     state = index
    productName.value=productContainer[index].name;
    productPrice.value=productContainer[index].price;
    productCategory.value=productContainer[index].category;
    productDesc.value=productContainer[index].description;

    document.getElementById('mainId').innerHTML="update"
    
}

function addUpdate(){
    productContainer[state].name= productName.value
    productContainer[state].price= productPrice.value
    productContainer[state].category= productCategory.value
    productContainer[state].description= productDesc.value
    displayProduct()
    localStorage.setItem("ourProduct", JSON.stringify(productContainer));
    mainBtn.innerHTML='Add Product'
    clearproduct()
}
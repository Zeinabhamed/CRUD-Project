
var productNameInput = document.getElementById("productNameInput");//Input Kolo
var productPriceInput = document.getElementById("productPriceInput");//Input Kolo
var productCategoryInput = document.getElementById("productCategoryInput");//Input Kolo
var productDescriptionInput = document.getElementById("productDescriptionInput");//Input Kolo

var productsContainer;
if (localStorage.getItem( 'myProducts' )== null)
{
productsContainer =[];
}
else
{
 productsContainer = JSON.parse(localStorage.getItem( 'myProducts' ))
 displayProducts()
}


function addProduct() {

     var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    description: productDescriptionInput.value
  };
    productsContainer.push(product);
    localStorage.setItem( 'myProducts' , JSON.stringify(productsContainer))
    clear();
    displayProducts();
    console.log(productsContainer);
}

function clear()
{
   productNameInput.value="";
   productPriceInput.value="";
   productCategoryInput.value="";
  productDescriptionInput.value="";
}

function displayProducts(){
  var cartoona=``;
  for ( var i=0 ; i<productsContainer.length; i++)
    {
       cartoona+= `<tr>
    <td>`+i+`</td>
        <td>`+productsContainer[i].name+`</td>
    <td>`+productsContainer[i].price+`</td>
    <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].description+`</td>
    <td><button onclick="changeFormForUpdate(`+i+`)" class="btn btn-outline-warning">update</button></td>
    <td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
</tr>`;

  }
  document.getElementById("tablebody").innerHTML=cartoona;
};

function deleteProduct(productIndex){
  productsContainer.splice(productIndex,1);
      localStorage.setItem( 'myProducts' , JSON.stringify(productsContainer))

  displayProducts();
}

function searchProduct(searchTerm)
{
  var cartoona=``;

for (var i=0 ; i<productsContainer.length ; i++)
{
    if (productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase( ))==true)
   {cartoona+= `<tr>
    <td>`+i+`</td>
        <td>`+productsContainer[i].name+`</td>
    <td>`+productsContainer[i].price+`</td>
    <td>`+productsContainer[i].category+`</td>
        <td>`+productsContainer[i].description+`</td>
    <td><button class="btn btn-outline-warning">update</button></td>
    <td><button onclick="deleteProduct(`+i+`)" class="btn btn-outline-danger">delete</button></td>
</tr>`;}

else
{
 console.log(`msh mawgod`);
}

}
document.getElementById(`tablebody`).innerHTML=cartoona;
}

function changeFormForUpdate(productIndex)
{
 productNameInput.value = productsContainer[productIndex].name;
 productPriceInput.value = productsContainer[productIndex].price;
 productCategoryInput.value = productsContainer[productIndex].category;
 productDescriptionInput.value = productsContainer[productIndex].description;

}
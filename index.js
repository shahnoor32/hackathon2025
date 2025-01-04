



 const getElementVal = (id) => {
    return document.getElementsByIdName(id).value;
 }
 function addToCart(productName, productPrice) {
   console.log(productName + ', ' + productPrice);
   // Get the table body where cart items will be added
   var cartTableBody = document.querySelector('.shopping-cart');
   console.log(cartTableBody)

   // Create a new row for the cart item
   var newRow = cartTableBody.insertRow();
   console.log(newRow) 
   
   // Create cells for product name and price
   var productNameCell = newRow.insertCell(0);
   var productPriceCell = newRow.insertCell(1);
   
   // Set the content of the cells
   productNameCell.textContent = productName;
   productPriceCell.textContent = '$' + productPrice.toFixed(2);
}

document.getElementById("addToCartBtn1").addEventListener("click",function(){
   alert("Your order was placed. Thanks for shopping!");
});
const products = [
{name:"Phone", price:15000, rating:4.5, category:"Electronics"},
{name:"Laptop", price:55000, rating:4.7, category:"Electronics"},
{name:"Headphones", price:2000, rating:4.1, category:"Electronics"},
{name:"Smart Watch", price:8000, rating:4.3, category:"Electronics"},
{name:"Tablet", price:20000, rating:4.4, category:"Electronics"},

{name:"T-Shirt", price:500, rating:4.0, category:"Clothing"},
{name:"Jeans", price:1500, rating:4.2, category:"Clothing"},
{name:"Jacket", price:3000, rating:4.6, category:"Clothing"},
{name:"Shoes", price:2500, rating:4.4, category:"Clothing"},
{name:"Scarf", price:300, rating:3.8, category:"Clothing"},

{name:"Panda", price:400,rating:4.8, category:"Toys"},
{name:"Kangaroo", price:250 ,rating:4.1, category:"Toys"},
{name:"Car", price:150, rating:4.0, category:"Toys"},
{name:"Barbie", price:200, rating:3.9, category:"Toys"},
{name:"Kitchen Set", price:100, rating:4.2, category:"Toys"},

{name:"Lipstick", price:600, rating:4.5, category:"cosmetics"},
{name:"Perfume", price:2500, rating:4.6, category:"cosmetics"},
{name:"Face Cream", price:900, rating:4.2, category:"cosmetics"},
{name:"Shampoo", price:350, rating:4.0, category:"cosmetics"},
{name:"Makeup Kit", price:1800, rating:4.7, category:"cosmetics"}

];
const productDiv=document.getElementById("products");
const sortSelect=document.getElementById("sort");
const categorySelect=document.getElementById("category");
function displayProducts(list) {
productDiv.innerHTML="";
for (let i=0;i<list.length;i++) 
{
productDiv.innerHTML+="<div class='product'>" + "<h3>" + list[i].name + "</h3>"+
"<p>Price: ₹" + list[i].price + "</p>" + "<p>Rating: " + list[i].rating + 
"</p>" + "<p>Category:" + list[i].category + "</p>" + "</div>";
}
}
function filterProducts() {
let filtered = [];
for (let i = 0; i < products.length; i++) 
{
if (categorySelect.value==="all"||products[i].category===categorySelect.value) 
{
filtered.push(products[i]);
}
}
return filtered;
}

function sortProducts(list)
{
let sortValue=sortSelect.value;
for (let i=0;i<list.length-1;i++) 
{
for (let j=i+1;j<list.length;j++) 
{
if (sortValue==="price-asc" && list[i].price>list[j].price ||
sortValue==="price-desc" && list[i].price<list[j].price ||
sortValue==="name-asc" && list[i].name>list[j].name ||
sortValue==="name-desc" && list[i].name<list[j].name ||
sortValue==="rating-asc" && list[i].rating>list[j].rating ||
sortValue==="rating-desc" && list[i].rating<list[j].rating ) 
{
let temp=list[i];
list[i]=list[j];
list[j]=temp;
}
}
}
return list;
}

function updateProducts()
{
let result=filterProducts();
result=sortProducts(result);
displayProducts(result);
}
sortSelect.addEventListener("change", updateProducts);
categorySelect.addEventListener("change", updateProducts);
displayProducts(products);

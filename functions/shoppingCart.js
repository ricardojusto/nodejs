// Store
function Store(products) {
  this.catalog = new Catalog(products);
  this.cart = new Cart();
}

Store.prototype.getCatalog = function() {
  return this.catalog.getProducts();
};
Store.prototype.getCartItems = function() {
  return this.cart.getItems();
};
Store.prototype.addProductToCart = function(product) {
  return this.cart.add(product);
};
Store.prototype.removeProductFromCart = function(product) {
  return this.cart.remove(product);
};
Store.prototype.getCartTotal = function() {
  return this.cart.getTotal();
};

//Catalog
function Catalog(products) {
  this.products = products;
}
Catalog.prototype.getProducts = function(){
  return this.products || []; // muito importante porque se nao passarmos valores no products o programa estoira porque tenta executar funcoes de um array num undefined
};



//Cart
function Cart() {
  this.items = [];
}
Cart.prototype.getItems = function(){
  return this.items;
};
Cart.prototype.add = function(product){
   this.items.push(product);
};
Cart.prototype.remove = function(product){
   this.items.splice(this.items.indexOf(product), 1);
};
Cart.prototype.getTotal = function(){
   return this.items.reduce(function(total, item){
    return total += item.price;
   }, 0);
};


//Run Application
var products = [
  {id: 1, name: "Apples", price: 0.32},
  {id: 2, name: "Oranges", price: 0.40},
  {id: 3, name: "Bananas", price: 0.78}
];
var myStore = new Store(products);
console.log(myStore.getCatalog());
var peache = {id: 4, name: "Peaches", price: 0.65 };
var pineapple = {id: 5, name: "Pineapple", price: 2.50 };
myStore.addProductToCart(peache);
myStore.addProductToCart(pineapple);
// myStore.removeProductFromCart(peache);
console.log(myStore.getCartItems());
console.log(myStore.getCartTotal());
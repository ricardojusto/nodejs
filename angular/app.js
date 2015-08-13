angular
  .module('storeApp', [])
  .directive('storeCatalog', storeCatalog)
  .directive('storeCart', storeCart)
  .controller('CatalogCtrl', CatalogCtrl)
  .controller('CartCtrl', CartCtrl)
  .factory('Store', Store);//criamos um modulo angular para utilizarmos na nossa app

function storeCatalog(){
  return {
    restrict: 'A', //pode ser um E um C ou mais - A esta directiva só pode ser reconhecida como um atributo no html - E como um elemento - ver os outros
    //com o restrict E muda-se o elemento por exemplo em vez de <div> seria <store-catalog>
    // template: '<p>This is the Catalog</p>'
    templateUrl: 'catalog.html',
    controller: "CatalogCtrl",
    controllerAs: 'ctrl', //permite que o controller seja acedido na directiva como ctrl
    scope: {} //assim isolamos porque dizemos que esta baseado num objecto vazio e nao vaitentar herdar de outra coisa que exista
  };
}

function CatalogCtrl(Store){
  var ctrl = this; //convention
  ctrl.title = "Catalog dynamic title";
  ctrl.currency = "  $";
  ctrl.addToCart = function(product){
    Store.addProductToCart(product);
  };
  ctrl.products = Store.getCatalog();
}

function storeCart(){
  return {
    restrict: 'A',
    templateUrl: 'cart.html',
    controller: 'CartCtrl',
    controllerAs: 'ctrl',
    scope: {}
  };
}

function CartCtrl(Store){
  var ctrl = this;
  ctrl.items = Store.cart.items;
}

function Store(){
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
return new Store([
  { name: "Apples", price: 0.20},
  { name: "Oranges", price: 0.43},
  { name: "Bananas", price: 0.66}
  ]);
}
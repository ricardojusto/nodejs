

function Cart() {
  this.items = [];
}


Cart.prototype.add = function(product){
  return this.items.push(product);
};

Cart.prototype.total = function(){
  var total = 0;
   this.items.forEach(function(product){
    total += product.price;
  });
  return total;
};

Cart.prototype.removeById = function(id){
  this.items = this.items.filter(function(item){
    return item.id !== id;
  });
};



var productA = { id: 1, price: 50 };
var productB = { id: 2, price: 100 };

var mycart = new Cart();

console.log(mycart.add(productA));
console.log(mycart.add(productB));
console.log(mycart.total());

mycart.removeById(productA.id);
console.log(mycart.total());


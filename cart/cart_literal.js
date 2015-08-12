var cart = {

  items: [],

  add: function(product){
    this.items.push(product);
  },

  // remove: function(product){
  //   this.items.shift(product);
  // },

   remove: function(product){
    var i = this.items.indexOf(product);
      this.items.splice(i,1);
  },

  total: function(){
      // VAR COUNT = 0;
      // for (var i = 0; i < this.tems.length; i++) {
      //   count += this.items[i].price;
      // }

      // also use reduce

    var total = 0;
    this.items.forEach(function(product){
      total += product.price;
    });
    return total;
  }
};

var productA = { price: 5 };
var productB = { price: 10 };

cart.add(productA);
cart.add(productB);
console.log(cart.total()); // 15

cart.remove(productA);
console.log(cart.total()); // 10




function Product(name, price, brand) {
  this.name = name;
  this.price = price;
  this.brand = brand;
}

function ProductList(products) {
  this.products = products;
}

ProductList.prototype.count = function() {
  return this.products.length;
};

ProductList.prototype.getNames = function() {
 // return this.products.forEach(function(item) {
 //    console.log(item.name);
  // });
  return this.products.map(function(item){
    return item.name;
 });
};

ProductList.prototype.filterByBrand = function(brand) {
  return this.products.filter(function(item){
    return item.brand === brand;
 });
};

ProductList.prototype.countByBrand = function(brand) {
  return this.products.filter(function(item){
    return item.brand === brand;
  }).length;
};

ProductList.prototype.groupByBrand = function() {
return this.products.sort(function(a,b){
  if (a.brand > b.brand) {
      return 1;
    }
    if (a.brand < b.brand) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
};

// ProductList.prototype.min = function() {
// return this.products.sort(function(a,b){
//   if (a.price > b.price) {
//       return a-b;
//     })
// }








var products = [
  new Product("Samsung Galaxy S6 Edge",829.90,"Samsung"),
  new Product("LG G Flex",689.90,"LG" ),
  new Product("Apple iPhone 6 Plus",779.90,"Apple"),
  new Product("Samsung Galaxy Alpha",589.90,"Samsung"),
  new Product("Nokia Lumia 930",489.90,"Nokia"),
  new Product("Sony Xperia Z3 Compact", 389.90, "Sony"),
  new Product("Apple iPhone 6", 779.90, "Apple" ),
  new Product("Huawei Ascend G7", 259.90, "Huawei" ),
  new Product("Sony Xperia T2 Ultra", 359.90, "Sony" ),
  new Product("LG G4", 589.90, "LG" ),
  new Product("Samsung Galaxy Note 4", 689.90, "Samsung" ),
  new Product("HTC One M9", 674.90, "HTC" ),
  new Product("Apple iPhone 5S", 589.90, "Apple")
];

var list = new ProductList(products);
// console.log(list.count());
// console.log(list.getNames());
// console.log(list.brand());
// console.log(list.filterByBrand("Samsung"));
// console.log(list.countByBrand("Samsung"));
// console.log(list.groupByBrand());
console.log(list.min());
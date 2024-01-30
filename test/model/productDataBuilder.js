const Product = require("../../src/entities/product");

class ProductDataBuilder {
  constructor() {
    this.productData = {
      id: "0001",
      name: "computer",
      price: 1000,
      category: "electronic",
    };
  }

  static aProduct() {
    return new ProductDataBuilder();
  }

  build() {
    const product = new Product(this.productData);
    return product;
  }
}

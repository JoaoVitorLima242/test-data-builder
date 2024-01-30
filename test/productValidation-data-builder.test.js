const { expect } = require("chai");
const { it, describe } = require("mocha");
const { productValidator, errorMessages } = require("./../src/index");
const ProductDataBuilder = require("./model/productDataBuilder");

describe("Test Data Builder", () => {
  it("shouldn't return error with valid product", () => {
    const product = ProductDataBuilder.aProduct().build();
    const result = productValidator(product);

    const expected = {
      errors: [],
      result: true,
    };

    expect(result).to.be.deep.equal(expected);
  });

  describe("Product Validation Rules", () => {
    it("should return an object error when creating a product with invalid id", () => {
      const product = ProductDataBuilder.aProduct().withInvalidId().build();
      const result = productValidator(product);

      const expected = {
        errors: [errorMessages.ID(product.id)],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });
    it("should return an object error when creating a product with invalid name", () => {
      const product = ProductDataBuilder.aProduct().withInvalidName().build();
      const result = productValidator(product);

      const expected = {
        errors: [errorMessages.NAME(product.name)],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });
    it("should return an object error when creating a product with invalid price", () => {
      const product = ProductDataBuilder.aProduct().withInvalidPrice().build();
      const result = productValidator(product);

      const expected = {
        errors: [errorMessages.PRICE(product.price)],
        result: false,
      };

      expect(result).to.be.deep.equal(expected);
    });
    it("should return an object error when creating a product with invalid category", () => {});
  });
});

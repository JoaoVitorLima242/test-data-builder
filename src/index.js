/* 
    PRODUCT_ID: should be between 2 and 20 characters
    NAME: should be only words
    PRICE: should be from 0 to a 1000
    CATEGORY: should be electronic or organic
*/

const errorMessages = {
  ID: (id) =>
    `id: invalid length! Current [${id}] should be between 2 and 20 characters.`,
  NAME: (name) =>
    `name: invalid value! Current [${name}] should have only words.`,
  PRICE: (price) =>
    `price: invalid value! Current [${price}] should be between 1 and 1000.`,
  CATEGORY: (category) =>
    `category: invalid value! Current [${category}] should be either electronic or organic.`,
};

function productValidator(product) {
  const errors = [];
  const isIdLengthSmallerThanTwoAndBiggerThanTwenty =
    product.id.length < 2 || product.id.length > 20;
  const nonWordCharacterAndDigitRegExp = /(\W|\d)/;
  const isPriceLowerThanOneAndBiggerThanOneThousand =
    product.price < 1 || product.price > 1000;
  const isInvalidCategory = (category) =>
    !(["electronic", "organic"].includes(category));

  if (isIdLengthSmallerThanTwoAndBiggerThanTwenty) {
    errors.push(errorMessages.ID(product.id));
  }

  if (nonWordCharacterAndDigitRegExp.test(product.name)) {
    errors.push(errorMessages.NAME(product.name));
  }

  if (isPriceLowerThanOneAndBiggerThanOneThousand) {
    errors.push(errorMessages.PRICE(product.price));
  }

  if (isInvalidCategory(product.category)) {
    errors.push(errorMessages.CATEGORY(product.category));
  }

  return {
    result: errors.length === 0,
    errors,
  };
}

module.exports = {
  productValidator,
  errorMessages,
};

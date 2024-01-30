/* 
    PRODUCT_ID: should be between 2 and 20 characters
    NAME: should be only words
    PRICE: should be from 0 to a 1000
    CATEGORY: should be an electronic or organic
*/

const errorMessages = {
  ID: (id) =>
    `id: invalid length! Current [${id}] should be between 2 and 20 characters.`,
  NAME: (name) =>
    `name: invalid value! Current [${name}] should have only words.`,
};

function productValidator(product) {
  const errors = [];
  const isIdSmallerThanTwoAndBiggerThanTwenty =
    product.id.length < 2 || product.id.length > 20;
  const nonWordCharacterAndDigitRegExp = /(\W|\d)/;

  if (isIdSmallerThanTwoAndBiggerThanTwenty) {
    errors.push(errorMessages.ID(product.id));
  }

  if (nonWordCharacterAndDigitRegExp.test(product.name)) {
    errors.push(errorMessages.NAME(product.name));
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

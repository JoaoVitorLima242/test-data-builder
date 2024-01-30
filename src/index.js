/* 
    PRODUCT_ID: should be between 2 and 20 characters
    NAME: should be only words
    PRICE: should be from 0 to a 1000
    CATEGORY: should be an electronic or organic
*/

function productValidator(product) {
  const errors = [];

  return {
    result: errors.length === 0,
    errors,
  };
}

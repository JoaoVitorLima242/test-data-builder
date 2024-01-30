# Test Data Builder & Object Mother
Project developed to improve my knowledge in test structures where I developed a simple product validator. I created two different test files to implement two different test design patterns. The first one is the Test Data Builder

## Test Data Builder
The TestDataBuilder pattern allows tests to specify only those parts of the object that need to be tested. Like in our example, we have different test cases in which each test we are only testing a specific property. Then, we can avoid create a lot of mocked objects creating a class that returns an object with the properties that we want. Look at the example, below:

```
// I want an object with an invalid id

// Case A) without test data builder desing
const invalidIdProduct = {
    id: 'invalidId',
    name,
    price,
    ...
}

// Case B) implementing test data builder desing
const invalidIdProduct = 
    ProductDataBuilder
        .withInvalidId()
        .build();
```

It makes it easier to create tests and a more readable code.

## Object Mother
Data Builder has a problem when we use in different test cases it could became repetitive. Then, we can avoid it using Object Mother Pattern that we scope all the logic inside the class functions and only return the object that we want.

The goal of the Object Mother pattern is not to provide a factory method for every single test requirement we might have but instead to provide ways to create a few functionally meaningful versions of an object that can be easily adapted within a concrete test.

```
// I want an object with an invalid id

class ObjectMother {
    static withInvalid() {
        return ProductDataBuilder
        .withInvalidId()
        .build();
    }
}

const invalidIdProduct = ObjectMother.withInvalId();
```

So, if we want to create a new `invalidIdProduct` it won't necessary run all the `ProductDataBuilder` methods, but only the method into `ObjectMother` class.
### References
Erick Wendel JS Expert Course
https://wiki.c2.com/?TestDataBuilder
https://www.eventbrite.com/engineering/readable-javascript-tests-with-object-builders/
http://www.natpryce.com/articles/000714.html


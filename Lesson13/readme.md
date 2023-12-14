# JavaScript Objects

## Objects

In JavaScript, almost "everything" is an object. Booleans can be objects (if defined with the new keyword), numbers can be objects (if defined with the new keyword), and strings can be objects (if defined with the new keyword).

All JavaScript values, except primitives, are objects.

JavaScript variables can contain single values:

```javascript
var person = "John Doe";
```

Objects are variables too. But objects can contain many values.

The values are written as name:value pairs (name and value separated by a colon).

```javascript
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
```

## Object Definition

You define (and create) a JavaScript object with an object literal:

```javascript
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
```

Spaces and line breaks are not important. An object definition can span multiple lines:

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

## Object Properties

The name:values pairs in JavaScript objects are called properties:

```javascript
var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
```

Property Values

Property values are written as name:value pairs, separated by commas.

Property value can be a string, a number, an array, a boolean, or any other JavaScript type.

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
```

## Accessing Object Properties

You can access object properties in two ways:

```javascript
objectName.propertyName;
```

or

```javascript
objectName["propertyName"];
```

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

var x = person.age;
var y = person["age"];
```

## JavaScript Object Methods

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
```

## The this Keyword

In a function definition, this refers to the "owner" of the function.
In the example above, this is the person object that "owns" the fullName function.

In other words, this.firstName means the firstName property of this object.

Read more about the this keyword at JS this Keyword.

### JavaScript Object Methods

- object create
- Destructing
- Object.assign
- Object.keys
- Object.values
- Object.entries
- Object.freeze
- Object.seal


## Next Lesson

- Object prototype
- Object constructor
- call, apply, bind
# JavaScript Arrays

## What is an Array?

An array is a special variable, which can hold more than one value at a time.

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:

```javascript
var car1 = "Saab";
var car2 = "Volvo";
var car3 = "BMW";
```

However, what if you want to loop through the cars and find a specific one? And what if you had not 3 cars, but 300?

The solution is an array!

An array can hold many values under a single name, and you can access the values by referring to an index number.

## Access the Elements of an Array

You access an array element by referring to the index number.

This statement accesses the value of the first element in cars:

```javascript
var cars = ["Saab", "Volvo", "BMW"];
var name = cars[0];
```

## Changing an Array Element

You can change the value of a specific element by referring to the index number:

```javascript
cars[0] = "Opel";
```

## Array Properties and Methods

An array has many useful properties and methods.

### The length Property

The length property returns the number of elements in an array:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var len = fruits.length; // the value of len is 4
```

### The sort() Method

The sort() method sorts arrays.

The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

By default, the sort() method sorts the values as strings in alphabetical and ascending order.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a "compare function" (See "Parameter Values" below).

### The reverse() Method

The reverse() method reverses the elements in an array.

You can use it to sort an array in descending order:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort(); // First sort the elements of fruits
fruits.reverse(); // Then reverse the order of the elements
```

### Numeric Sort

By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers.

You can fix this by providing a "compare function":

```javascript
var points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
```

The compare function compares all the values in the array, two values at a time (a, b).

When comparing 40 and 100, the sort() method calls the compare function(40, 100).

The function calculates 40 - 100 (a - b), and since the result is negative (-60), the sort function will sort 40 as a value lower than 100.

You can use this code snippet to experiment with numerically and alphabetically sorting:

```javascript
var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo").innerHTML = points;

function myFunction() {
  points.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("demo").innerHTML = points;
}
```

### The toString() Method

The toString() method returns an array as a comma separated string:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
```

### The join() Method

The join() method also joins all array elements into a string.

It behaves just like toString(), but in addition you can specify the separator:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
```

### Popping and Pushing

When you work with arrays, it is easy to remove elements and add new elements.

This is what popping and pushing is:

- Popping items out of an array, or pushing items into an array.

### Popping Array Elements

The pop() method removes the last element from an array:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop(); // Removes the last element ("Mango") from fruits
```

The pop() method returns the value that was "popped out":

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop(); // the value of x is "Mango"
```

### Pushing Array Elements

The push() method adds a new element to an array (at the end):

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi"); //  Adds a new element ("Kiwi") to fruits
```

The push() method returns the new array length:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.push("Kiwi"); //  the value of x is 5
```

### Shifting Elements

Shifting is equivalent to popping, working on the first element instead of the last.

The shift() method removes the first array element and "shifts" all other elements to a lower index.

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift(); // Removes the first element "Banana" from fruits
```

The shift() method returns the string that was "shifted out":

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.shift(); // the value of x is "Banana"
```

### Unshifting Elements

The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon"); // Adds a new element "Lemon" to fruits
```

The unshift() method returns the new array length.

### Changing Elements

Array elements are accessed using their index number:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[0] = "Kiwi"; // Changes the first element of fruits to "Kiwi"
```

### Deleting Elements

Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0]; // Changes the first element in fruits to undefined
```

### Splicing an Array

The splice() method can be used to add new items to an array:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
```

The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (2) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

The splice() method returns an array with the deleted items:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var removed = fruits.splice(2, 2, "Lemon", "Kiwi");
```

The result of removed will be:

```javascript
Orange, Apple;
```

### Using splice() to Remove Elements

With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1); // Removes the first element of fruits
```

The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.

The splice() method returns an array with the deleted items:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var removed = fruits.splice(0, 2);
```

The result of removed will be:

```javascript
Banana, Orange;
```

### Merging (Concatenating) Arrays

The concat() method creates a new array by merging (concatenating) existing arrays:

```javascript
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys); // Concatenates (joins) myGirls and myBoys
```

The concat() method does not change the existing arrays. It always returns a new array.

### Slicing an Array

The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);
```

The slice() method creates a new array. It does not remove any elements from the source array.

This example slices out a part of an array starting from array element 3 ("Apple"):

```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
```

The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.

```javascript
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
```

The slice() method can take two arguments like slice(1, 3).

The method then selects elements from the start argument, and up to (but not including) the end argument.

### Automatic toString()

JavaScript automatically converts an array to a comma separated string when a primitive value is expected.

This is always the case when you try to output an array.

These two examples will produce the same result:

```javascript
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();
document.getElementById("demo").innerHTML = fruits;
```

### The Difference Between Arrays and Objects

In JavaScript, arrays use numbered indexes.

In JavaScript, objects use named indexes.

Arrays are a special kind of objects, with numbered indexes.

When to Use Arrays. When to use Objects.

JavaScript does not support associative arrays.

You should use objects when you want the element names to be strings (text).

You should use arrays when you want the element names to be numbers.

### Avoid new Array()

There is no need to use the JavaScript's built-in array constructor new Array().
Use [] instead.

These two different statements both create a new empty array named points:

```javascript
var points = new Array(); // Bad
var points = []; // Good
```

These two different statements both create a new array containing 6 numbers:

```javascript
var points = new Array(40, 100, 1, 5, 25, 10); // Bad
var points = [40, 100, 1, 5, 25, 10]; // Good
```

## JavaScript Array Methods

### Array Methods

Array methods are functions built-in to JavaScript that we can apply to our arrays.

### The forEach() Method

The forEach() method calls a function (a callback function) once for each array element.

```javascript
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
```

### The map() Method

The map() method creates a new array by performing a function on each array element.

The map() method does not execute the function for array elements without values.

The map() method does not change the original array.

```javascript
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
```

### The filter() Method

The filter() method creates a new array with array elements that passes a test.

This example creates a new array from elements with a value larger than 18:

```javascript
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

### The reduce() Method

The reduce() method runs a function on each array element to produce (reduce it to) a single value.

The reduce() method works from left-to-right in the array. See also reduceRight().

The reduce() method does not reduce the original array.

This example finds the sum of all numbers in an array:

```javascript
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
```

### The reduceRight() Method

The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.

The reduceRight() works from right-to-left in the array. See also reduce().

The reduceRight() method does not reduce the original array.

This example finds the sum of all numbers in an array:

```javascript
var numbers = [45, 4, 9, 16, 25];
var sum = numbers.reduceRight(myFunction);

function myFunction(total, value, index, array) {
  return total + value;
}
```

### The every() Method

The every() method check if all array values pass a test.

This example check if all array values are larger than 18:

```javascript
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

/* ===== Prototype Practice ===== */

// THIS IS A SPACE BETWEEN ANSWERS
console.log('');
// THIS IS A SPACE BETWEEN ANSWERS

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

function CuboidMaker1(length, width, height) {
  this.length = length,
  this.width = width,
  this.height = height
}

const cubeOne = new CuboidMaker1({
});


/* == Step 2: Volume Method ==
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  
  Formula for cuboid volume: length * width * height
*/

CuboidMaker1.prototype.volume = function(length, width, height){
  return length * width * height
};


console.log(cubeOne.volume(10, 10, 10));


// THIS IS A SPACE BETWEEN ANSWERS
console.log('');
// THIS IS A SPACE BETWEEN ANSWERS


/* == Step 3: Surface Area Method ==
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 

  Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
*/

CuboidMaker1.prototype.surfaceArea = function(length, width, height){
  return 2 * (length * width + length * height + width * height) 
};

console.log(cubeOne.surfaceArea(10, 10, 10));


// THIS IS A SPACE BETWEEN ANSWERS
console.log('');
// THIS IS A SPACE BETWEEN ANSWERS



/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
*/

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

const cubeTwo = new CuboidMaker1({
  length: 4,
  width: 5,
  height: 5
});

console.log(cubeTwo.volume(4, 5, 5));
console.log(cubeTwo.surfaceArea(4, 5, 5));


// THIS IS A SPACE BETWEEN ANSWERS
console.log('');
// THIS IS A SPACE BETWEEN ANSWERS

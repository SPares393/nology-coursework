// CHALLENGE

// 1. Write a function to find the perimeter of a rectangle
const calculatePerimeter = (width, height) => {
  return width * 2 + height * 2;
};

// 2. Write a function to find the area of a circle. When given a radius, print the area to the console.
const calculateArea = (radius) => {
  const area = Math.PI * radius * radius;
  console.log(area);
};

// 3. Do the same to find the circumference of a circle.
const calculateCircumference = (radius) => {
  const diameter = radius * 2;
  const circumference = Math.PI * diameter;
  console.log(circumference);
};

calculateCircumference(10);

/* evaluting the area and rectangle of a rectangle using basic js */

var rect = require('./rectangle');

function solveRect(l, b) {
  console.log('solving for rectangle with l=' + l + ' and b=' + b);

  if (l <= 0 || b <= 0) {
    console.log('the values should be greater than zero ');
  } else {
    console.log('the area of the rectagle is ' + rect.area(l, b));
    console.log('the perimeter of the rectagle is ' + rect.perimeter(l, b));
  }
}

solveRect(2, 4);

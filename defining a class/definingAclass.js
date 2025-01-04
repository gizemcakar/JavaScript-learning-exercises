class Polygon {
    constructor(lengths) {
      this.lengths1 = length[0];
      this.lengths2 = length[1];
      this.lengths3 = length[2];
      this.lengths4 = length[3];
    }
      perimeter () {
      return length1 + length2 + length3 +length4 ;
  }
  }

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
describe('triangle',function() {
  it('is true if any side is not as long as the other two combined', function() {
    triangle(2, 2, 3).should.equal(true);
  });
});

describe('eqiulateral',function() {
  it('is true if all sides are the same length', function() {
    equilateral(5, 5, 5).should.equal(true);
  });
});

describe('isosceles',function() {
  it('is true if two sides are the same length', function() {
    isosceles(5, 5, 2).should.equal(true);
  });
});

describe('scalene',function() {
  it('is true if all sides are different', function() {
    scalene(5, 6, 2).should.equal(true);
  });
});

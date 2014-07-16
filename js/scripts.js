var triangle = function(a,b,c) {
    return((a+b >= c) && (a+c >= b) && (b+c >= a));
};

var equilateral = function(a,b,c) {
  return (a === b && a === c);
};

//Make sure not an euilateral triangle
var isosceles = function(a,b,c) {
  return (a === b || a === c || b === c) && triangle(a,b,c);
};

var scalene = function(a,b,c) {
  return (a !==b || a !==c || b !==c) && triangle(a,b,c);
};

$(document).ready(function() {
  $(".sides").submit(function(event) {
    var a = parseInt($('.a').val());
    var b = parseInt($('.b').val());
    var c = parseInt($('.c').val());
if( isNaN(a) || isNaN(b) || isNaN(c) ) {
  alert("Please enter numbers");
} else if(equilateral(a,b,c)) {
  alert("It's an equilateral!");
  $(".equi").fadeIn("slow");
} else if(isosceles(a,b,c)) {
  alert("It's an isosceles");
  $(".isoc").fadeIn("slow");
} else if(scalene(a,b,c)) {
  alert("It's a scalene");
  $(".scal").fadeIn("slow")
} else {
  alert("It's not a triangle");
};


  event.preventDefault();
  });
});

function puf(a) {
  a2 = [];
  for (var i = 0; i < a.length; i++) {
    a2[i] = a[i] + 1;
    //a2.push(a[i]+1);
  };
  console.log(a2);
};
//puf([1,2,3,4,5]);

function puf2(a) {
  a2 = [];
  //a.forEach(function(x) {x+1});
  //a.forEach(function(x) {return x+1});
  var sum = 0;
  a.forEach(function(x, i) {
    a2[i] = a[i] + 1;
  });
  console.log(a2);
};
//puf2([1,2,3,4,5]);

function puf3(a) {
  var a2 = [];
  a.map(function(x,i) {
    a2[i] = a[i] + 1;
  });
  console.log(a2);
};
puf3([1,2,3,4,5]);

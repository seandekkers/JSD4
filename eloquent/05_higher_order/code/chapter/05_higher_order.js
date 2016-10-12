var ancestry = JSON.parse(ANCESTRY_FILE);

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function reduceAncestors(person, f, defaultValue) {
  function valueFor(person) {
    if (person == null)
      return defaultValue;
    else
      return f(person, valueFor(byName[person.mother]),
                       valueFor(byName[person.father]));
  }
  return valueFor(person);
}

function sharedDNA(person, fromMother, fromFather) {
  if (person.name == "Pauwels van Haverbeke")
    return 1;
  else
    return (fromMother + fromFather) / 2;
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});


//Flattening (Reduce with concat)

var arrays = [[1, 2, 3], [4, 5], [6]];

concatArrays = arrays.reduce(function(a,b){
  return a.concat(b);
});

//Answer console.log(concatArrays);



function average(array){
  var add = array.reduce(function(a,b){
  return a + b;
  });
  return add / array.length;

}





//makes a new object byName defined by the persons Name
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});



//var withMothers = ancestry.filter(function(person){
//  return person.mother != null
//});
//console.log(withMothers);

var difference = ancestry.filter(function(person){
  return byName[person.mother] != null;
}).map(function(person){
  return person.born - byName[person.mother].born;
});

console.log(average(difference));





// Your code here.
// → [1, 2, 3, 4, 5, 6]
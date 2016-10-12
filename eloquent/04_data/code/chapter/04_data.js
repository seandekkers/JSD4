var journal = [];

var counter = 0;
var entry = JOURNAL[1];

console.log(JOURNAL.length);
//console.log(JOURNAL);
console.log(JOURNAL[6].events);
console.log(JOURNAL[1].squirrel);
//console.log(entry);
//console.log(entry.events);
//console.log(entry.events[1]);

//for (var pizza in JOURNAL.events[1]){
//console.log(pizza)
//}
function addEntry(events, squirrel) {
  journal.push({
    events: events,
    squirrel: squirrel
  });
}

for (var i = 0; i< JOURNAL.length; i++){
    addEntry(JOURNAL[i].events, JOURNAL[i].squirrel);
}
console.log("journal length is: " + journal.length);

function argumentCounter(entry){
  var counter = 0;
  for (var i = 0; i< journal.length; i++){
    var appendString = '"'+ entry +'"';

    console.log(appendString);
    
    singleEntry = (journal[i].events);

  /*for(var prop in journal[i].events){
    console.log("Day " + i  + " Event: " + singleEntry[prop]);
  };
  */

    if (JOURNAL[i].events.indexOf(entry) != -1)
    //if (singleEntry.indexOf(entry) != -1)
      counter++;
  }
  return counter;
}

var options = [ "peanuts", "pizza", "touched tree", "brushed teeth", "exercise"];
for(var i = 0; i < options.length; i++){
  //console.log('"'+ options[i] +'"');
  console.log('"'+ options[i] +'"' + " was called " + argumentCounter(options[i]) + " times.");
}




/*unction addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}
*/

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

function hasEvent(event, entry) {
  return entry.events.indexOf(event) != -1;
}

function tableFor(event, journal) {
  var table = [0, 0, 0, 0];
  for (var i = 0; i < journal.length; i++) {
    var entry = journal[i], index = 0;
    if (hasEvent(event, entry)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function gatherCorrelations(journal) {
  var phis = {};
  for (var entry = 0; entry < journal.length; entry++) {
    var events = journal[entry].events;
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (!(event in phis))
        phis[event] = phi(tableFor(event, journal));
    }
  }
  return phis;
}

var correlations = gatherCorrelations(JOURNAL);

for (var i = 0; i < JOURNAL.length; i++) {
  var entry = JOURNAL[i];
  if (hasEvent("peanuts", entry) &&
     !hasEvent("brushed teeth", entry))
    entry.events.push("peanut teeth");
}

var list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};

//var entry = journal[0].events;



//funtion listProperties(obj, event){
  //  for(prop in obj){
//console.log(prop);
//} 
//}
//console.log(listProperties(journal,"pizza"));


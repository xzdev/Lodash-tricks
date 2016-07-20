var _ = require('lodash');
/**
 * Some examples are from "Lodash: 10 Javascript Utility Functions That You Should Probably Stop Rewriting"
 * http://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting
 */
//==================================================================================
// _.isEmpty
//==================================================================================
_.isEmpty(null); //true
_.isEmpty({}); //true
_.isEmpty([]); // true
_.isEmpty([1]); // false

var someArr = null;
// So instead of doing this
// if (someArr && someArr.length > 0)
if (!_.isEmpty(someArr)) {
  // do something
}

//==================================================================================
//  _.size
//==================================================================================
console.log('_.size', _.size([2,3]), _.size({a: 1, b: [2,3], c: {}}));

//==================================================================================
// _.times
//==================================================================================
// Execute an function multiple times
_.times(5, (i) => {
    console.log(i);
})

//==================================================================================
// _.uniqueId
//==================================================================================
// Create an array of N size and populate them with unique values of the same prefix
var arr = _.times(6, _.uniqueId.bind(null, 'myPrefix_'));
console.log(arr);

// Regardless where the uniqueId method is called, in the same file or imported from another file,
// it always ensure the uniqueness
console.log('Unique test 1:', _.uniqueId());
var unique = require('./unique');
console.log('Unique test 2:', _.uniqueId());
unique();
console.log('Unique test 3:', _.uniqueId());

//==================================================================================
// _.map, _.get, and _.set
//==================================================================================
// Fetch the property by JSON path
var ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];
_.map(ownerArr, 'pets').map(console.log);
_.map(ownerArr, 'pets[0].name').map(console.log);
_.map(ownerArr, 'pets[2].name').map(console.log);
console.log('_.get: ', _.get(ownerArr[0], 'pets[0].name'));
console.log('_.get: ', _.get(ownerArr[2], 'pets[0].name', 'no dogs found'));

//==================================================================================
// _.random
//==================================================================================
// Get Random Number between a range
_.times(10, () => console.log('random number between 15 to 20', _.random(15, 20)));

//==================================================================================
// _.omit, _.pick
//==================================================================================
// Removing and picking properties from object
objA = {"name": "colin", "car": "suzuki", "age": 17};
var objC = _.omit(objA, ['car', 'age']);
console.log('object A after omit properties', objC);
var objD = _.omitBy(objA, _.isNumber);
console.log('object A after omit number properties', objD);
var objE = _.pick(objA, ['car', 'age']);
console.log('object created by picking "car" and "age" properties', objE);

//==================================================================================
// _.attempt
//==================================================================================
// Attemp
console.log(_.isError(_.attempt(JSON.parse.bind(null, 'x'))));
console.log(_.isError(_.attempt(JSON.parse.bind(null, '{}'))));

//==================================================================================
//  _.forEach, _.forOwn & _.forIn
//==================================================================================
function Foo() {
  this.a = 1;
  this.b = 2;
}

Foo.prototype.c = 3;
for(var i in new Foo) {
    console.log(i);
}
console.log('-----------------------------------');
_.forEach(new Foo, function(value, key) {
  console.log(key);
});
console.log('-----------------------------------');
_.forOwn(new Foo, function(value, key) {
  console.log(key);
});
console.log('-----------------------------------');
_.forIn(new Foo, function(value, key) {
  console.log(key);
});

console.log('==================================');
//==================================================================================
//  _.defaults
//==================================================================================
console.log(_.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' }));

//==================================================================================
//  _.includes
//==================================================================================
console.log('_.includes', _.includes(['1', '2'], 1), _.includes([1, 2], 3), _.includes([1, 2], 2));

// _.intersection
// _.without
// _.join
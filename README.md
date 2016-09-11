# Lodash-tricks
Lodash is a JavaScript utility library that can greatly improve your productivity. 

## Basic lodash functions you should already familiar with
```
_.find, _.clone, _.cloneDeep, _.assign, _.isArray, _.map, _.forEach
```

## Useful functions
### _.isEmpty
```js
_.isEmpty(null); //true
_.isEmpty({}); //true
_.isEmpty([]); // true
_.isEmpty([1]); // false
```

### _.size
```js
_.size([2,3]); //2
_.size({a: 1, b: [2,3], c: {}}); //3
```

### _.times
```js
_.times(5, (i) => {
    console.log(i); // 0, 1, 2, 3, 4
})
```

### _.uniqueId
```js
_.uniqueId(); // "1"
_.uniqueId('MyPrefix_'); // "MyPrefix_2"

require('./myotherfile');
_.uniqueId(); // "3"

///// myotherfile.js
_.uniqueId(); // "2"
```

### _.map, _.get, and _.set
```js
var ownerArr = [{
    "owner": "Colin",
    "pets": [{"name":"dog1"}, {"name": "dog2"}]
}, {
    "owner": "John",
    "pets": [{"name":"dog3"}, {"name": "dog4"}]
}];
_.map(ownerArr, 'pets[0].name').map(console.log); // dog1, dog3
_.map(ownerArr, 'pets[2].name').map(console.log); // [undefined, undefined], no exceptions
_.get(ownerArr[0], 'pets[0].name'); //dog1
_.get(ownerArr[2], 'pets[0].name', 'no dogs found'); //no dogs found
_.set(ownerArr[0], 'pets[0].name', 'dogx'); // now ownerArr[0].pets is [{"name":"dogx"}, {"name": "dog2"}] 
_.set(ownerArr[2], 'pets[0].name', 'dogy'); // no exceptions, ownerArr keeps its original value
```

### _.omit, _.pick
```js
var mycar = {'name': 'colin', 'car': 'suzuki', 'age': 17};
_.omit(mycar, ['car', 'age']); // {"name": "colin"}
_.pick(mycar, ['car', 'age']); // {"car": "suzuki", "age": 17};
```

### _.attempt
```js
_.isError(_.attempt(JSON.parse.bind(null, 'x'))); // true, no exception
_.isError(_.attempt(JSON.parse.bind(null, '{}'))); // false, no exception
```

### _.defaults
```js
_.defaults({ 'host': 'www.google.com' }, { 'port': 80 }, { 'protocol': 'http' }); //  {"host": "www.google.com", "port": 80, "protocol": "http"}
```

### _.throttle, _.debounce
```js
scrollBar.onscroll(_.throttle(onScrollFunc, 400)); // throttle ensures the onScrollFunc is called approximately 400ms in between
submitButton.onclick(_.debounce(onSubmitFunc, 400, {
  'leading': true,
  'trailing': false
})); // debounce ensures the onSubmitFunc is not called multiple times within 400ms
```

## Credits

[Lodash: 10 Javascript Utility Functions That You Should Probably Stop Rewriting](http://colintoh.com/blog/lodash-10-javascript-utility-functions-stop-rewriting)
[Underscore debounce vs throttling](http://jsfiddle.net/missinglink/19e2r2we/)

var _ = require('lodash');

var id1 = _.uniqueId();
var id2 = _.uniqueId();

console.log('unique id', id1, id2);

module.exports = function() {
    console.log('unique in each execution', _.uniqueId());
}



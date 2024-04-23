const { fromJS } = require("immutable");

function getImmutableObject(parameter) {
    return fromJS(parameter);
}

const object = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
}

const result = getImmutableObject(object)

console.log (result);

module.exports = getImmutableObject;
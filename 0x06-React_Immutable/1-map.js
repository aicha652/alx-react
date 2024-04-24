const { Map } = require("immutable");

function getImmutableObject(parameter) {
    return Map(parameter);
}

module.exports = getImmutableObject;
const { fromJS } = require("immutable");

function getImmutableObject(parameter) {
    return fromJS(parameter);
}

module.exports = getImmutableObject
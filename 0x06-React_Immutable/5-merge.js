const { List } = require("immutable");
const { Map } = require("immutable");

function concatElements(page1, page2) {
    const page = page1.concat(page2);
    return List(page);
}

function mergeElements(page1, page2) {
    const page = {
        ...page1,
        ...page2
    };

    return Map(page);
}

module.exports = concatElements, mergeElements;
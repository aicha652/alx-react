const { List } = require("immutable");

export function getListObject(array) {

    return List(array);
}

export function addElementToList(list, element) {

    list.push(element);
    return list;
}
import { List } from 'immutable';
import { Map } from 'immutable';

export function concatElements(page1, page2) {
    const page = page1.concat(page2);
    return List(page);
}

export function mergeElements(page1, page2) {
    const page = {
        ...page1,
        ...page2
    };

    return Map(page);
}
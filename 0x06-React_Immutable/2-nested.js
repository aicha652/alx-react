import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
    return accessImmutableObject.getIn((['object', array]));
}
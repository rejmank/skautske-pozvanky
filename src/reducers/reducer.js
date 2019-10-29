import { map, path, assocPath, last, inc } from 'ramda';

export const changeSelected = (state, id) => {
  return assocPath(
    ['things'],
    map(thing => {
      if (path(['id'], thing) === id) {
        return assocPath(['selected'], !path(['selected'], thing), thing);
      }
      return thing;
    }, path(['things'], state)),
    state
  );
};

export const addThing = (state, name) => {
  return assocPath(
    ['things'],
    [
      ...path(['things'], state),
      {
        id: inc(path(['id'], last(path(['things'], state)))),
        selected: true,
        name
      }
    ],
    state
  );
};

export const changeText = (state, value) => {
  return assocPath(
    ['texts'],
    map(textBox => {
      if (path(['id'], textBox) === value.id) {
        return assocPath(['text'], path(['value'], value), textBox);
      }
      return textBox;
    }, path(['texts'], state)),
    state
  );
};

export const switchToBw = (state) => {
  return assocPath(['bw'], !path(['bw'], state), state)
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeSelected':
      return changeSelected(state, action.id);
    case 'addThing':
      return addThing(state, action.name);
    case 'changeText':
      return changeText(state, action.value);
    case 'switchToBw':
      return switchToBw(state)
    default:
      return state;
  }
};

export default reducer;

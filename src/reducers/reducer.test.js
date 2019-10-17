import { changeSelected, addThing, changeText } from './reducer';
import initialState from '../../assets/typeOne';

test('changeSelected', () => {
  expect(changeSelected({ ...initialState }, 1)).toMatchSnapshot();
});

test('add new thing to list of things', () => {
  expect(addThing({ ...initialState }, 'test')).toMatchSnapshot();
});

test('change  text by id', () => {
  expect(
    changeText(
      { ...initialState },
      {
        id: 1,
        value: 'changed'
      }
    )
  ).toMatchSnapshot();
});

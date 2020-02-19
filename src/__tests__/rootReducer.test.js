import rootReducer from '../redux/reducers/rootReducer';

it('Checks that root reducer is not null', () => {
  expect(rootReducer).not.toEqual(null);
});

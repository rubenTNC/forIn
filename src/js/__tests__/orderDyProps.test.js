import orderDyProps, { character } from '../orderDyProps';

test('test function  orderDyProps', () => {
  const result = orderDyProps(character, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(result).toEqual(expected);
});

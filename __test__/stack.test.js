import { makeStack } from '../src/internal-lib.js';

test('stack`s main flow', () => {
  const stack = makeStack();
  stack.push('one');
  stack.push('two');
  
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});
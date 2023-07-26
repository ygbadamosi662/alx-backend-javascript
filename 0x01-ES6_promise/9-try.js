import divideFunction from './8-try.js';

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const foo = mathFunction();
    queue.push(foo);
  } catch (e) {
    queue.push(e.message);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
console.log(guardrail(() => {return divideFunction(10, 1)}));

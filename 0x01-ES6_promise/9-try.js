import divideFunction from './8-try';

export default function guardrail(mathFunction) {
  const arr = [];
  try {
    const foo = mathFunction();
    arr.push(foo);
  } catch (e) {
    arr.push(e.message);
  } finally {
    arr.push('Guardrail was processed');
  }
  return arr;
}
console.log(guardrail(() => divideFunction(10, 0)));

export default function createIteratorObject(report) {
  const data = [];
  for (const val of Object.values(report.allEmployees)) {
    data.push(val);
  }
  return data.flat();
}

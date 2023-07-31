export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, current) => acc + current.id, 0);
  }
  return [];
}

export default function updateStudentGradeByCity(studentList, city, gradeList) {
  if (Array.isArray(studentList) && Array.isArray(gradeList)) {
    if (typeof city === 'string') {
      return studentList.filter((obj) => obj.location === city)
        .map((obj) => {
          const updatedObj = { ...obj };
          gradeList.forEach((gradeObj) => {
            if (gradeObj.studentId === updatedObj.id) {
              updatedObj.grade = gradeObj.grade;
            }
          });
          if (!('grade' in updatedObj)) {
            updatedObj.grade = 'N/A';
          }
          return updatedObj;
        });
    }
    throw TypeError('city must be a string');
  }
  return [];
}

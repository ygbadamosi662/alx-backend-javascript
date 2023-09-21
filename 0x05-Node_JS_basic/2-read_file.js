const fs = require('fs');

const readCsv = (path) => {
  try {
    const lines = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);
    return lines;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

const collateData = (lines) => {
  let studentCount = 0;
  const fields = {};
  lines.splice(0, 1);
  for (const line of lines) {
    if (line.trim() !== '') {
      studentCount += 1;
      const [fname, lname, age, field] = line.split(','); // eslint-disable-line
      if (!fields[field]) {
        fields[field] = {
          count: 1,
          students: [fname],
        };
      } else {
        const newCount = fields[field].count + 1;
        const newStudents = [...fields[field].students, fname];
        fields[field] = {
          count: newCount,
          students: newStudents,
        };
      }
    }
  }
  const data = {
    allStudents: studentCount,
    fields,
  };

  return data;
};

const displayData = (data) => {
  console.log(`Number of students: ${data.allStudents}`);
  for (const field of Object.keys(data.fields)) {
    const n = data.fields[field].count;
    const names = data.fields[field].students.join(', ');
    console.log(`Number of students in ${field}: ${n}. List: ${names}`);
  }
};

const countStudents = (path) => {
  const lines = readCsv(path);
  const data = collateData(lines);
  displayData(data);
};

module.exports = countStudents;

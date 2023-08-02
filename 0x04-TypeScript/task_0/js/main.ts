interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const diane: Student = {
  firstName: 'Diane',
  lastName: 'King',
  age: 1,
  location: 'Lagos'
};

const diana: Student = {
  firstName: 'Diana',
  lastName: 'King',
  age: 27,
  location: 'Lagos'
};

const students: Array<Student> = [diane, diana];

const table = document.createElement('table') as HTMLTableElement;

students.forEach((student) => {
    const row = table.insertRow();
    const fnameCell = row.insertCell(0);
    const locationCell = row.insertCell(1);

    fnameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
})

var diane = {
    firstName: 'Diane',
    lastName: 'King',
    age: 1,
    location: 'Lagos'
};
var diana = {
    firstName: 'Diana',
    lastName: 'King',
    age: 27,
    location: 'Lagos'
};
var students = [diane, diana];
var table = document.createElement('table');
students.forEach(function (student) {
    var row = table.insertRow();
    var fnameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    fnameCell.innerHTML = student.firstName;
    locationCell.innerHTML = student.location;
});
//# sourceMappingURL=main.js.map
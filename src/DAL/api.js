const studentsList = [
  {
    id: 0,
    username: 'Link',
    email: 'link@zelda.com',
    address: 'Hyrule 165 Hateno Village 12345',
    course: 'JavaScript',
    gender: 'Male',
    average: 70,
  },
  {
    id: 1,
    username: 'Zelda',
    email: 'zelda@gmail.com',
    address: 'Hyrule 165 Hateno Village 12345',
    course: 'JavaScript',
    gender: 'Female',
    average: 88,
  },
  {
    id: 2,
    username: 'Mario',
    email: 'supermario@gmail.com',
    address: 'Mushroom Village 165',
    course: 'React',
    gender: 'Male',
    average: 92,
  },
  {
    id: 3,
    username: 'Sonic',
    email: 'sonicthehedgehog@yahoo.com',
    address: 'Tel Aviv Alenbi 602',
    course: 'JavaScript',
    gender: 'Other',
    average: 64,
  },
];

const addStudent = newStudent => {
  newStudent.id = studentsList.length;
  newStudent.average = Math.floor(Math.random() * 45 + 56);
  studentsList.push(newStudent);
  localStorage.setItem('students', JSON.stringify(studentsList));
  return newStudent;
};

const sortStudentsAsc = sortBy => {
  studentsList.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
  });
  console.log(studentsList)
  return studentsList;
};

const sortStudentsDesc = sortBy => {
  studentsList.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0;
  });
  return studentsList;
};

const savedStudents = JSON.parse(localStorage.getItem('students'));

const studentsData = savedStudents || studentsList;
export {
  studentsData as students,
  addStudent,
  sortStudentsAsc,
  sortStudentsDesc,
};

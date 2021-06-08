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

const savedStudents = JSON.parse(localStorage.getItem('students'));

const studentsData = savedStudents || studentsList;

const addStudent = newStudent => {
  newStudent.id = studentsData.length;
  newStudent.average = Math.floor(Math.random() * 45 + 56);
  studentsData.push(newStudent);
  localStorage.setItem('students', JSON.stringify(studentsData));
  return newStudent;
};

const sortStudentsAsc = sortBy => {
  studentsData.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0;
  });
  return studentsData;
};

const sortStudentsDesc = sortBy => {
  studentsData.sort((a, b) => {
    return a[sortBy] > b[sortBy] ? -1 : a[sortBy] < b[sortBy] ? 1 : 0;
  });
  return studentsData;
};

export {
  studentsData as students,
  addStudent,
  sortStudentsAsc,
  sortStudentsDesc,
};

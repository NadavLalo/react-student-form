let students = [
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
    email: 'link@zelda.com',
    address: 'Hyrule 165 Hateno Village 12345',
    course: 'JavaScript',
    gender: 'Male',
    average: 88,
  },
  {
    id: 2,
    username: 'Lalo',
    email: 'link@zelda.com',
    address: 'Hyrule 165 Hateno Village 12345',
    course: 'JavaScript',
    gender: 'Male',
    average: 92,
  },
  {
    id: 3,
    username: 'Borat',
    email: 'link@zelda.com',
    address: 'Hyrule 165 Hateno Village 12345',
    course: 'JavaScript',
    gender: 'Male',
    average: 64,
  },
];

const addStudent = newStudent => {
  newStudent.id = students.length;
  newStudent.average = Math.floor(Math.random() * 45 + 56);
  students.push(newStudent);
  localStorage.setItem('students', JSON.stringify(students));
  return [...students];
};

const savedStudents = JSON.parse(localStorage.getItem('students'));

const studentsData = savedStudents || students;
export { studentsData as students, addStudent };

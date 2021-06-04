import React, { useState } from 'react';

import { students, addStudent } from './DAL/api';

import { Container, Row, Col } from 'react-bootstrap';

import StudentsList from './components/Students/StudentsList';
import AddStudentModal from './components/StudentForm/StudentModal';
import StudentDetailsModal from './components/Students/StudentDetailsModal';
import './App.css';
import NavbarComponent from './components/Students/Navbar';

function App() {
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [studentsList, setStudentsList] = useState(students);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [lastSort, setLastSort] = useState('');

  const showAddStudentHandler = () => setShowAddStudent(!showAddStudent);

  const showStudentDetailsHandler = () =>
    setShowStudentDetails(!showStudentDetails);

  const addStudentHandler = newStudent => {
    const newStudentsList = addStudent(newStudent);
    if (lastSort) {
      sortStudentsHandler(lastSort, newStudentsList);
    }
    setStudentsList(newStudentsList);
  };

  const studentDetailsClickHandler = student => {
    setSelectedStudent(student);
    showStudentDetailsHandler();
  };

  const sortStudentsHandler = (sortBy, listToSort) => {
    setLastSort(sortBy);
    listToSort.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      } else if (a[sortBy] < b[sortBy]) {
        return -1;
      } else {
        return 0;
      }
    });
    setStudentsList([...listToSort]);
  };
  return (
    <Container fluid>
      <NavbarComponent
        studentsList={studentsList}
        onShowAddStudent={showAddStudentHandler}
        onSortStudents={sortStudentsHandler}
      />
      <AddStudentModal
        show={showAddStudent}
        onToggle={showAddStudentHandler}
        onAddStudent={addStudentHandler}
        className='alert-success'
      />

      <StudentDetailsModal
        student={selectedStudent}
        show={showStudentDetails}
        onToggle={showStudentDetailsHandler}
      />

      <Row>
        <Col xs={8} md={10} className='mx-auto my-5'>
          <StudentsList
            studentsList={studentsList}
            onStudentClick={studentDetailsClickHandler}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

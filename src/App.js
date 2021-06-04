import React, { useState } from 'react';

import {
  students,
  addStudent,
  sortStudentsAsc,
  sortStudentsDesc,
} from './DAL/api';

import { Container, Row, Col } from 'react-bootstrap';

import StudentsList from './components/Students/StudentsList';
import AddStudentModal from './components/StudentForm/AddStudentModal';
import StudentDetailsModal from './components/Students/StudentDetailsModal';
import NavbarComponent from './components/Students/Navbar';
import './App.css';

function App() {
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showStudentDetails, setShowStudentDetails] = useState(false);
  const [studentsList, setStudentsList] = useState(students);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const [lastSort, setLastSort] = useState(null);

  const showAddStudentHandler = () => setShowAddStudent(!showAddStudent);

  const showStudentDetailsHandler = () =>
    setShowStudentDetails(!showStudentDetails);

  const addStudentHandler = newStudent => {
    const studentToAdd = addStudent(newStudent);
    setStudentsList([...studentsList, studentToAdd]);
    if (lastSort) {
      sortStudentsHandler(lastSort.sortBy, lastSort.sortOrder);
    }
  };

  const studentDetailsClickHandler = student => {
    setSelectedStudent(student);
    showStudentDetailsHandler();
  };

  const sortStudentsHandler = (sortBy, sortOrder) => {
    setLastSort({ sortBy, sortOrder });
    if (sortOrder === 'desc') {
      setStudentsList([...sortStudentsDesc(sortBy)]);
      return;
    }
    setStudentsList([...sortStudentsAsc(sortBy)]);
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
        <Col xs={11} md={8} className='mx-auto my-5'>
          <StudentsList
            studentsList={studentsList}
            onStudentClick={studentDetailsClickHandler}
            onSortStudents={sortStudentsHandler}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

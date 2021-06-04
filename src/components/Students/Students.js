import React, { useState } from 'react';
import { Button, Row, Col, Dropdown, Nav, Navbar } from 'react-bootstrap';

import StudentModal from '../StudentForm/StudentModal';
import StudentDetailsModal from './StudentDetailsModal';
import StudentsList from './StudentsList';

function Students({ students, addStudent }) {
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
      sortStudents(lastSort, newStudentsList);
    }
    setStudentsList(newStudentsList);
  };

  const studentDetailsClickHandler = student => {
    setSelectedStudent(student);
    showStudentDetailsHandler();
  };

  const sortStudents = (sortBy, listToSort) => {
    setLastSort(sortBy);
    listToSort.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1
      } else if (a[sortBy] < b[sortBy]) {
        return -1
      } else {
        return 0
      }
    });
    setStudentsList([...listToSort]);
  };

  return (
    <>
      <StudentModal
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
    </>
  );
}

export default Students;

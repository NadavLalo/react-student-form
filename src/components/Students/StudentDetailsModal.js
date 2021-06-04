import React from 'react';
import { Modal } from 'react-bootstrap';
import StudentDetails from './StudentDetails';
const StudentDetailsModal = ({ show, onToggle, student }) => {
  return (
    <Modal size={'md'} show={show} onHide={onToggle}>
      <Modal.Body>
        <StudentDetails student={student} onToggle={onToggle} />
      </Modal.Body>
    </Modal>
  );
};

export default StudentDetailsModal;

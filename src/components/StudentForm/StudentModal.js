import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import StudentForm from './StudentForm';

const AddStudentModal = ({ show, onToggle, onAddStudent }) => {
  const [studentAdded, setStudentAdded] = useState(false);

  const handleAddStudent = newStudent => {
    setStudentAdded(true);
    onAddStudent(newStudent);
  };

  return (
    <Modal show={show} onHide={onToggle} size={'lg'}>
      <Modal.Header className='alert-success flex-column align-items-center'>
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={onToggle}
        >
          <span aria-hidden='true'>×</span>
        </button>
        {!studentAdded && (
          <div>
            <h3 className='text-center'>Student Details</h3>
            <p>Greetings, Student! Please fill in your details</p>
          </div>
        )}
      </Modal.Header>

      <Modal.Body className='alert-success'>
        {!studentAdded ? (
          <StudentForm onHide={onToggle} onStudentAdd={handleAddStudent} />
        ) : (
          <div className='text-center'>
            <h4 className='p-4'>Student added successfully!</h4>
            <Button
              variant='dark'
              className='mb-4'
              onClick={() => {
                onToggle();
                setTimeout(() => setStudentAdded(false), 250);
              }}
            >
              Dismiss
            </Button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default AddStudentModal;

import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './StudentDetails.module.css';

function StudentDetails({ student, onToggle }) {
  const manOrWoman = student.gender === 'Male' ? 'men' : 'women';
  return (
    <Card className='mt-5 text-dark'>
      <Card.Img
        variant='top'
        className={`fluid ${classes['student-img']}`}
        src={`https://randomuser.me/api/portraits/${manOrWoman}/${student.id}.jpg`}
      />
      <Card.Body>
        <Card.Title as='h2'>{student.username}</Card.Title>
        <Card.Text>Average: {student.average}</Card.Text>
        <Card.Text>Email: {student.email}</Card.Text>
        <Card.Text>Address: {student.address}</Card.Text>
        <Card.Text>Course: {student.course}</Card.Text>
        <Card.Text>Gender: {student.gender}</Card.Text>
        <div className='text-center'>
          <Button variant='dark' onClick={onToggle}>
            Dismiss
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default StudentDetails;

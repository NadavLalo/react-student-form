import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { FaInfo, FaSortDown } from 'react-icons/fa';
const StudentsList = ({ studentsList, onStudentClick }) => {
  return (
    <>
      {studentsList.length ? (
        <Table striped bordered responsive hover variant='dark text-center'>
          <thead>
            <tr>
              <th>
                Name <FaSortDown />
              </th>
              <th>Average</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {studentsList.map((student, index) => (
              <tr key={index}>
                <td>{student.username} </td>
                <td>{student.average}</td>
                <td
                  style={{ cursor: 'pointer' }}
                  onClick={() => onStudentClick(student)}
                >
                  <FaInfo />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Card>
          <h4 className='text-center text-dark py-2'>No students found</h4>
        </Card>
      )}
    </>
  );
};

export default StudentsList;

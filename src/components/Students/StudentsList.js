import React, { useState } from 'react';
import { Card, Table } from 'react-bootstrap';

import { FaInfo, FaSortDown, FaSortUp } from 'react-icons/fa';
import classes from './StudentsList.module.css';

const StudentsList = ({ studentsList, onStudentClick, onSortStudents }) => {
  const [sortBy, setSortBy] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  const sortClickHandler = (sortBy, sortOrder) => {
    setSortBy(sortBy);
    setSortOrder(sortOrder);
    onSortStudents(sortBy, sortOrder);
  };
  return (
    <>
      {studentsList.length ? (
        <Table striped bordered responsive hover variant='dark text-center'>
          <thead>
            <tr>
              <th>
                <span>Name</span>
                <span className={classes['icons-wrapper']}>
                  <FaSortDown
                    className={`${classes.pointer} ${
                      sortBy === 'username' && sortOrder === 'desc'
                        ? classes.activeIcon
                        : classes.icon
                    }`}
                    onClick={() => sortClickHandler('username', 'desc')}
                  />
                  <FaSortUp
                    className={`${classes.pointer} ${
                      sortBy === 'username' && sortOrder === 'asc'
                        ? classes.activeIcon
                        : classes.icon
                    }`}
                    onClick={() => sortClickHandler('username', 'asc')}
                  />
                </span>
              </th>
              <th>
                Average
                <span className={classes['icons-wrapper']}>
                  <FaSortDown
                    className={`${classes.pointer} ${
                      sortBy === 'average' && sortOrder === 'desc'
                        ? classes.activeIcon
                        : classes.icon
                    }`}
                    onClick={() => sortClickHandler('average', 'desc')}
                  />
                  <FaSortUp
                    className={`${classes.pointer} ${
                      sortBy === 'average' && sortOrder === 'asc'
                        ? classes.activeIcon
                        : classes.icon
                    }`}
                    onClick={() => sortClickHandler('average', 'asc')}
                  />
                </span>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {studentsList.map((student, index) => (
              <tr key={index}>
                <td>{student.username} </td>
                <td>{student.average}</td>
                <td
                  className={classes.pointer}
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

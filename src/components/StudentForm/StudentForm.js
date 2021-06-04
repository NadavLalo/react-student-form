import React, { useState, useEffect } from 'react';

import {
  Form,
  Row,
  Col,
  InputGroup,
  ButtonGroup,
  ToggleButton,
  Button,
} from 'react-bootstrap';

import { FaUser, FaMailBulk, FaCity, FaUserGraduate } from 'react-icons/fa';

import ErrorMessage from './ErrorMessage';
import validations from '../../utils/validations';


function StudentForm({ onStudentAdd }) {
  const [formIsValid, setFormIsValid] = useState(false);
  const [studentData, setStudentData] = useState({
    username: {
      value: '',
      errors: [],
      touched: false,
      valid: false,
    },
    email: {
      value: '',
      errors: [],
      touched: false,
      valid: false,
    },
    address: {
      value: '',
      errors: [],
      touched: false,
      valid: false,
    },
    course: {
      value: '',
      errors: [],
      touched: false,
      valid: false,
    },
    gender: {
      value: '',
      errors: [],
      touched: false,
      valid: false,
    },
  });

  useEffect(() => {
    for (const inputName in studentData) {
      if (!studentData[inputName].valid) {
        setFormIsValid(false);
        return;
      }
    }
    setFormIsValid(true);
  }, [studentData]);

  const validateInput = ({ target: { value, name } }) => {
    const newErrors = [];
    if (validations[name].required && !value) {
      newErrors.push(`${name} is required`);
    }
    if (!value.match(validations[name].pattern)) {
      newErrors.push(validations[name].patternMessage);
    }

    setStudentData(prevState => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        errors: newErrors,
        touched: true,
        valid: !newErrors.length,
      },
    }));
  };

  const handleInputChange = ({ target: { value, name } }) => {
    setStudentData({
      ...studentData,
      [name]: {
        ...studentData[name],
        value: value,
      },
    });

    validateInput({ target: { value, name } });
  };

  const onSubmit = e => {
    e.preventDefault();

    for (const inputName in studentData) {
      validateInput({
        target: { value: studentData[inputName].value, name: inputName },
      });

      console.log(studentData);
    }

    if (formIsValid) {
      const newStudent = {
        username: studentData.username.value,
        email: studentData.email.value,
        address: studentData.address.value,
        course: studentData.course.value,
        gender: studentData.gender.value,
      };
      onStudentAdd(newStudent);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row className='justify-content-around'>
        <Col xs={12} lg={4}>
          <Form.Group controlId='username'>
            <Form.Label>Username</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaUser />
              </InputGroup.Text>

              <Form.Control
                name='username'
                value={studentData.username.value}
                onChange={handleInputChange}
                onBlur={validateInput}
                placeholder='Enter Username'
                isValid={
                  studentData.username.valid && studentData.username.touched
                }
                isInvalid={
                  !studentData.username.valid && studentData.username.touched
                }
              />
            </InputGroup>

            <ErrorMessage errors={studentData.username.errors} />
          </Form.Group>
        </Col>

        <Col xs={12} lg={4}>
          <Form.Group controlId='email'>
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaMailBulk />
              </InputGroup.Text>

              <Form.Control
                name='email'
                value={studentData.email.value}
                onChange={handleInputChange}
                onBlur={validateInput}
                placeholder='Enter Email'
                isValid={studentData.email.valid && studentData.email.touched}
                isInvalid={
                  !studentData.email.valid && studentData.email.touched
                }
              />
            </InputGroup>
            <ErrorMessage errors={studentData.email.errors} />
          </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} lg={10}>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaCity />
              </InputGroup.Text>
              <Form.Control
                as='textarea'
                rows='3'
                name='address'
                value={studentData.address.value}
                onChange={handleInputChange}
                onBlur={validateInput}
                placeholder='Street, Number, City, Zip'
                isValid={
                  studentData.address.valid && studentData.address.touched
                }
                isInvalid={
                  !studentData.address.valid && studentData.address.touched
                }
              />
            </InputGroup>
            <ErrorMessage errors={studentData.address.errors} />
          </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-around'>
        <Col xs={12} lg={4}>
          <Form.Group controlId='course'>
            <Form.Label>Course</Form.Label>
            <InputGroup>
              <InputGroup.Text>
                <FaUserGraduate />
              </InputGroup.Text>

              <Form.Control
                as='select'
                name='course'
                onChange={handleInputChange}
                // onBlur={validateInput}
                isValid={studentData.course.valid && studentData.course.touched}
                isInvalid={
                  !studentData.course.valid && studentData.course.touched
                }
              >
                <option value='' hidden>
                  Choose Course
                </option>
                <option value='JavaScript'>JavaScript</option>
                <option value='React'>React</option>
                <option value='Angular'>Angular</option>
              </Form.Control>
            </InputGroup>
            <ErrorMessage errors={studentData.course.errors} />
          </Form.Group>
        </Col>

        <Col xs={12} lg={4}>
          <Form.Group controlId='gender'>
            <Form.Label>Gender</Form.Label>
            <InputGroup>
              <ButtonGroup
                toggle
                className='mb-2'
                onChange={handleInputChange}
                onBlur={validateInput}
              >
                <ToggleButton
                  type='radio'
                  variant={`${
                    !studentData.gender.valid && studentData.gender.touched
                      ? 'outline-danger'
                      : 'outline-success'
                  }`}
                  name='gender'
                  checked={studentData.gender.value === 'Male'}
                  value='Male'
                >
                  Male
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  variant={`${
                    !studentData.gender.valid && studentData.gender.touched
                      ? 'outline-danger'
                      : 'outline-success'
                  }`}
                  name='gender'
                  checked={studentData.gender.value === 'Female'}
                  value='Female'
                >
                  Female
                </ToggleButton>
                <ToggleButton
                  type='radio'
                  variant={`${
                    !studentData.gender.valid && studentData.gender.touched
                      ? 'outline-danger'
                      : 'outline-success'
                  }`}
                  name='gender'
                  checked={studentData.gender.value === 'Other'}
                  value='Other'
                >
                  Other
                </ToggleButton>
              </ButtonGroup>
            </InputGroup>
            <ErrorMessage errors={studentData.gender.errors} />
          </Form.Group>
        </Col>
      </Row>
      <Row className='justify-content-center'>
        <Col xs={12} lg={4}>
          <Button variant='primary' className='w-100' type='submit'>
            Add Student
          </Button>
        </Col>
      </Row>
    </Form>
  );
}
export default StudentForm;

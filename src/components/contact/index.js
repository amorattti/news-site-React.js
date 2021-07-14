import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Form, Button } from 'react-bootstrap';

const Contact = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      message: Yup.string()
        .min(200, 'Must be 200 characters or less')
        .required('Required it'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      console.log(values)
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Contact us</h1>
      <Form.Group>
        <Form.Label htmlFor="firstName">First Name</Form.Label>
        <Form.Control
          id="firstName"
          type="text"        
          isValid={formik.touched.firstName && !formik.errors.firstName}
          isInvalid={!!formik.errors.firstName}
          {...formik.getFieldProps('firstName')}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.firstName}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="lastName">Last Name</Form.Label>
        <Form.Control
          id="lastName"
          type="text"
          isValid={formik.touched.lastName && !formik.errors.lastName}
          isInvalid={!!formik.errors.lastName}
          {...formik.getFieldProps('lastName')}
        />
        <Form.Control.Feedback type="invalid">
          <div>{formik.errors.lastName}</div>
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label htmlFor="email">Email Address</Form.Label>
        <Form.Control
          id="email"
          type="email"
          isValid={formik.touched.email && !formik.errors.email}
          isInvalid={!!formik.errors.email}
          {...formik.getFieldProps('email')}
        />
        <Form.Control.Feedback type="invalid">
          <div>{formik.errors.email}</div>
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Message</Form.Label>
        <Form.Control
          id="message"
          as="textarea"
          isValid={formik.touched.message && !formik.errors.message}
          isInvalid={!!formik.errors.message}
          rows={3}
          {...formik.getFieldProps('message')}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.message}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">Send message</Button >
    </Form>
  );
}

export default Contact;
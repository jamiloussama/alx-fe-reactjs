import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validationSchema, initialValues, handleSubmit } from './formikForm'; // Import the logic from formikForm.js

const FormikForm = () => {
  return (
    <div>
      <h2>Formik User Registration</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
            />
            <ErrorMessage name="username" component="p" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
            />
            <ErrorMessage name="email" component="p" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
            />
            <ErrorMessage name="password" component="p" className="error" />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;

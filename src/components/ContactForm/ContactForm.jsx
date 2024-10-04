import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { nanoid } from 'nanoid';

const initialValues = {
  id: nanoid(),
  name: "",
  number: ""
};



const ContactForm = ({addUser}) => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    addUser(values);
    actions.resetForm();
  }
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label>Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>Number
          <Field type="text" name="number" />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="button">Add contact</button>
      </Form>
    </Formik>
  )
}

export default ContactForm
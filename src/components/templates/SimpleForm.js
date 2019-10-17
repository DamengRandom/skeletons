import React from 'react';
import { Formik, ErrorMessage } from 'formik';

// utils
import { validationSchema } from "../../utils/validations/SimpleForm";

// components
import InputField from "../atoms/InputField";

export default function SimpleForm() {
  return (
    <Formik
      initialValues={{ email: '', message: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          resetForm();
          setSubmitting(false);
        }, 100);
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <div>Preview data: {JSON.stringify(values)}</div>
          <InputField
            tag="input"
            label="Email"
            type="email"
            name="email"
            id="SimpleFormEmail"
            placeholder="Enter your email here .."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={touched.email && errors.email ? 'has-error': null}
          />
          <ErrorMessage name="email" />
          <InputField
            tag="textarea"
            label="Message"
            type="message"
            name="message"
            id="SimpleFormMessage"
            placeholder="Enter your message here .."
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            className={touched.message && errors.message ? 'has-error': null}
          />
          <ErrorMessage name="message" />
          <button type="submit" disabled={isSubmitting}>Send</button>
        </form>
      )}
    </Formik>
  )
}

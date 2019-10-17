import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email address (eg: xxx@xxx.xxx)')
    .max(50, 'Must not beyond 50 characters')
    .required(),
  message: Yup.string()
    .min(2, 'Must have at least two characters')
    .max(500, 'Must not beyond 500 characters')
    .required()
});

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
          {JSON.stringify(values)}
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="SimpleFormEmail"
              placeholder="Enter your email here .."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? 'has-error': null}
            />
          </div>
          <ErrorMessage name="email" />
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              name="message"
              id="SimpleFormMessage"
              placeholder="Leave your message here .."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              className={touched.message && errors.message ? 'has-error': null}
            />
          </div>
          <ErrorMessage name="message" />
          {console.log(touched, errors)}
          <button type="submit" disabled={isSubmitting}>Send</button>
        </form>
      )}
    </Formik>
  )
}

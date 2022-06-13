import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import * as yup from "yup";
import Button from '@mui/material/Button';

const App = () => {
  const defaultValue = {
    name: "",
    email: "",
    password: "",
    gender: "",
    documents: "",
    termAndCondition: false,
  }

  const validationSchema = yup.object().shape({
    name: yup.string().required("please enter your name"),
    email: yup.string().required("please enter your email").email("enter valid email"),
    password: yup.string().required("please enter your password"),
    gender: yup.string().required("Please select your gender"),
    documents: yup.string().required("please select any of the document"),
    termAndCondition: yup.boolean().oneOf([true], "required, accept the terms and condition"),
  })
  const handleSubmit = (value) => {
    console.log(value);
  }

  return (
    <>
      <div style={{ margin: 10 }} >

        <h1>Form validation with Formik and Yup library</h1>
        <Card raised style={{ margin: 10, padding: 20 }} >
          <Formik
            initialValues={defaultValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <Stack spacing={3}>
                {/* type text */}
                <Field type="text" name="name" placeholder="enter your name" />
                <ErrorMessage name='name' />

                <Field type="text" name="email" placeholder="enter your email" />
                <ErrorMessage name='email' />

                <Field type="password" name="password" placeholder="enter your password" />
                <ErrorMessage name='password' />


                {/* type dropdown */}
                <Field component="select" name="gender" placeholder='select your gender'>
                  <option value="" disabled>select option</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <ErrorMessage name='gender' />

                {/* radio */}
                <Stack direction="row">
                  <label >
                    <Field type="radio" name="documents" value="aadhar" />
                    Aadhar Card
                  </label>
                  <label >
                    <Field type="radio" name="documents" value="voter" />
                    Voter Card
                  </label>
                  <ErrorMessage name='documents' />
                </Stack>

                {/* check box */}
                <label>
                  <Field type="checkbox" name="termAndCondition" />
                  Please accept our term and conditions
                </label>
                <ErrorMessage name="termAndCondition" />

                <Button type='submit' variant="outlined" color="success">Save</Button>

              </Stack>

            </Form>
          </Formik>
        </Card>
      </div>
    </>
  )
}

export default App
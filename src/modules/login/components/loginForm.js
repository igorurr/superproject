import React, {Component} from "react";
import { Form, FormGroup } from 'reactstrap';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { FormikElement } from './';
import { LoadingButton } from '../../helperModules';

import {connect} from "react-redux";
import {userLogin} from "../../../actions/user";



const validationSchema = Yup.object().shape({
  login: Yup.string()
    .required('Login is required!'),
  password: Yup.string()
    .required('Password is required!')
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userLogin } = this.props;

    return (
      <Formik
        initialValues={{
          login: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={ ( values, { setSubmitting, setErrors } ) => {
          userLogin(
            values.login,
            values.password,
            () => {
            },
            ( errors ) => {
              setSubmitting(false);
              setErrors(errors);
            }
          );
        }}
      >
        {({ errors, touched, handleSubmit, handleChange, isSubmitting }) => (
          <Form>
            <FormikElement
              name={'login'}
              type={'text'}
              placeholder={'Login'}
              handleChange={handleChange}
              errors={ (errors.login && touched.login) ? errors.login : '' }
            />
            <FormikElement
              name={'password'}
              type={'password'}
              placeholder={'Password'}
              handleChange={handleChange}
              errors={ (errors.password && touched.password) ? errors.password : '' }
            />
            <FormGroup>
              <LoadingButton onClick={handleSubmit} text={'Submit'} processing={isSubmitting} />
            </FormGroup>
          </Form>
        )}
      </Formik>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLogin: ( login, pass, success, faile ) => dispatch(userLogin( login, pass, success, faile )),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
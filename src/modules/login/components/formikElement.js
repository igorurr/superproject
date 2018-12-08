import React from 'react'

import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

const FormikElement = ({
 name,
 type,
 label,
 placeholder,
 handleChange,
 errors,
}) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Input
      invalid={errors !== ''}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
    />
    <FormFeedback>{errors}</FormFeedback>
  </FormGroup>
);

export default FormikElement;

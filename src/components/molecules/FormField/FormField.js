import { Input } from 'components/atoms/Input/Input';
import { Label } from 'components/atoms/Label/Label';
import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${Label} {
    margin: 10px 0;
  }
`;

const FormField = ({ value, onChange, label, name, id, type = 'text', ...props }) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input name={name} id={id} type={type} onChange={onChange} value={value} />
    </Wrapper>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default FormField;
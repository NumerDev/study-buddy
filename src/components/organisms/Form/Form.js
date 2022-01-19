import React from 'react';
import { Title } from 'components/atoms/Title/Title';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

const Form = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <Title>Test</Title>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange}></FormField>
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange}></FormField>
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange}></FormField>
        <Button type="submit">Add</Button>
      </ViewWrapper>
    </>
  );
};

export default Form;

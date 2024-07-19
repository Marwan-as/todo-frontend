import React from "react";
import { FormContainer, Input, Button } from "./styles";

const Form = ({ handleSubmit, handleFieldChange, data }) => {
  
  const renderInput = () => {
    return (
      <Input
        type="text"
        onChange={(e) => handleFieldChange(e.target.value, "text")}
        value={data?.text}
      />
    );
  };

  const renderButton = () => {
    return (
      <Button type="submit" title="Add Todo">
        Add
      </Button>
    );
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {renderInput()} {renderButton()}
    </FormContainer>
  );
};

export default Form;

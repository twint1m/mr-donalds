import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
`;

const ToppingLabel = styled.label`
  order: 1;
`;

const InputTopping = styled.input`
`;

export const InputToppings = ({ toppingName, inputId }) => {
  return (
    <InputContainer>
      <ToppingLabel htmlFor={inputId}>{toppingName}</ToppingLabel>
      <InputTopping type="radio" id={inputId} />
    </InputContainer>
  );
};

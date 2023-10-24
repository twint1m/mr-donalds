import React from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  border: 1px solid black;
  border-radius: 15px;
  text-align: center;
`;

const CountButton = styled.button`
  background-color: transparent;
  border: 0;
  font-size: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const CountItem = ({ count, setCount, onChange }) => {
  return (
    <CountWrapper>
      <span>Количество</span>
      <InputWrapper>
        <CountButton disabled={count <= 1} onClick={() => setCount(count - 1)}>
          -
        </CountButton>
        <CountInput
          type="number"
          min={1}
          max={100}
          value={count < 1 ? 1 : count}
          onChange={onChange}
        />
        <CountButton
          disabled={count >= 100}
          onClick={() => setCount(count + 1)}
        >
          +
        </CountButton>
      </InputWrapper>
    </CountWrapper>
  );
};

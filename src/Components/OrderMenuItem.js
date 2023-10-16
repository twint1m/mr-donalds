import React from "react";
import styled from "styled-components";
import binIcon from "../image/bin-icon.svg";

const OrderSpan = styled.span``;

const OrderSpanContainer = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const OrderMenuItem = ({ content, quantity, price }) => {
  return (
    <OrderSpanContainer>
      <OrderSpan>{content}</OrderSpan>
      <OrderSpan>{quantity}</OrderSpan>
      <OrderSpan>{price}</OrderSpan>
      <img src={binIcon} alt="bin icon"></img>
    </OrderSpanContainer>
  );
};

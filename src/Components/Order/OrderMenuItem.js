import React from "react";
import styled from "styled-components";
import binIcon from "../../image/bin-icon.svg"
import { totalPrice } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";

const OrderSpan = styled.span``;

const OrderSpanContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const OrderMenuItem = ({ order }) => {
  return (
    <OrderSpanContainer>
      <OrderSpan>{order.name}</OrderSpan>
      <OrderSpan>{order.count}</OrderSpan>
      <OrderSpan>
        {formatCurrency(totalPrice(order))}
      </OrderSpan>
      <img src={binIcon} alt="bin icon"/>
    </OrderSpanContainer>
  );
};

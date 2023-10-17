import React from "react";
import styled from "styled-components";
import binIcon from "../../image/bin-icon.svg"

const OrderSpan = styled.span``;

const OrderSpanContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const OrderMenuItem = ({ order }) => {
  return (
    <OrderSpanContainer>
      <OrderSpan>{order.name}</OrderSpan>
      <OrderSpan>2</OrderSpan>
      <OrderSpan>
        {order.price.toLocaleString("ru-RU", {
          style: "currency",
          currency: "RUB",
        })}
      </OrderSpan>
      <img src={binIcon} alt="bin icon"/>
    </OrderSpanContainer>
  );
};

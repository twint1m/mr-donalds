import React from "react";
import styled from "styled-components";
import { OrderMenuItem } from "./OrderMenuItem";
import { CheckoutButton } from "../Modal/ModalItem";
import { totalPrice } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";

const OrderMenuList = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  width: 380px;
  height: 100%;

  background: white;
`;

const H2Styled = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 50px;
  margin-top: 20px;
`;

const StyledSpan = styled.span`
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
`;

const OrderMenuItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const OrderTotal = styled.span`
  margin-left: 30px;
  margin-right: 75px;
`;

const OrderQuantity = styled.span``;

const OrderSum = styled.span`
  margin-left: 63px;
`;

const OrderTotalContainer = styled.div`
  display: flex;
  margin-top: 150px;
`;

export const OrderMenu = ({ orders }) => {
  const total = orders.reduce((result, order) => {
    return totalPrice(order) + result;
  }, 0);

  return (
    <OrderMenuList>
      <H2Styled>Ваш заказ</H2Styled>
      <OrderMenuItemContainer>
        {orders.length ? (
          orders.map((order) => {
            return (
              <OrderMenuItem price={order.price} key={order.id} order={order} />
            );
          })
        ) : (
          <StyledSpan>Вы еще ничего не выбрали</StyledSpan>
        )}
      </OrderMenuItemContainer>
      <OrderTotalContainer>
        <OrderTotal>Итого</OrderTotal>
        <OrderQuantity>5</OrderQuantity>
        <OrderSum>{formatCurrency(total)}</OrderSum>
      </OrderTotalContainer>
      <CheckoutButton style={{ display: "flex", margin: "30px auto" }}>
        Оформить
      </CheckoutButton>
    </OrderMenuList>
  );
};

import React from "react";
import styled from "styled-components";
import { OrderMenuItem } from "./OrderMenuItem";
import { CheckoutButton } from "./ModalItem";

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

export const OrderMenu = () => {
  return (
    <OrderMenuList>
      <H2Styled>Ваш заказ</H2Styled>
      <StyledSpan>Вы еще ничего не выбрали</StyledSpan>
      <OrderMenuItemContainer>
        <OrderMenuItem content={"Бургер"} quantity={2} price={380} />
        <OrderMenuItem content={"Бургер"} quantity={2} price={380} />
        <OrderMenuItem content={"Бургер"} quantity={2} price={380} />
      </OrderMenuItemContainer>
      <OrderTotalContainer>
        <OrderTotal>Итого</OrderTotal>
        <OrderQuantity>5</OrderQuantity>
        <OrderSum>850</OrderSum>
      </OrderTotalContainer>
      <CheckoutButton style={{display: 'flex', margin: '30px auto',}}>Оформить</CheckoutButton>
    </OrderMenuList>
  );
};

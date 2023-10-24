import React from "react";
import styled from "styled-components";
import { InputToppings } from "./InputTopping";
import { CountItem } from "./CountItem";
import { useCount } from "../Hooks/useCount";
import { totalPrice } from "../Functions/secondaryFunction";
import { formatCurrency } from "../Functions/secondaryFunction";

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: white;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-color: black;
`;

const AboutBurger = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px;
`;

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const CheckoutButton = styled.button`
  padding: 20px 80px;
  background-color: #299b01;
  border: 0;
  transition: all 0.3s;
  font-size: 21px;
  color: white;
  display: flex;
  margin: 0 auto;
  &:hover {
    background-color: green;
    transition: all 0.3s;
  }
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-around;
`;


export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount();
  
  const closeModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
  };
  
  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay onClick={closeModal} id="overlay">
      <Modal>
        <Banner img={openItem.img} />
        <AboutBurger>
          <h2>{openItem.name}</h2>
          <h3>
            {formatCurrency(openItem.price)}
          </h3>
        </AboutBurger>
        <RadioContainer>
          <InputToppings toppingName={"Халапеньо"} inputId={"japanello"} />
          <InputToppings toppingName={"Сыр"} inputId={"cheese"} />
          <InputToppings toppingName={"Бекон"} inputId={"bacon"} />
        </RadioContainer>
        <CountItem {...counter} />
        <TotalPriceItem>
          <span>Цена:</span>
          <span> 
            {formatCurrency(totalPrice(order))}
          </span>
        </TotalPriceItem>
        <CheckoutButton onClick={addToOrder}>Добавить</CheckoutButton>
      </Modal>
    </Overlay>
  );
};

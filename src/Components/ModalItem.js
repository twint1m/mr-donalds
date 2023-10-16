import React from "react";
import styled from "styled-components";
import { InputToppings } from "./InputTopping";

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
  background-color: #299B01;
  border: 0;
  transition: all .3s;
  font-size: 21px;
  color: white;
  &:hover {
    background-color: green;
    transition: all .3s;
  }
`

export const ModalItem = ({ openItem, setOpenItem }) => {
  function closeModal(e) {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  }

  if (!openItem) {
    return null;
  }

  return (
    <Overlay onClick={closeModal} id="overlay">
      <Modal>
        <Banner img={openItem.img} />
        <AboutBurger>
          <h2>{openItem.name}</h2>
          <h3>
            {openItem.price.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}
          </h3>
        </AboutBurger>
        <RadioContainer>
          <InputToppings toppingName={"Халапеньо"} inputId={"japanello"} />
          <InputToppings toppingName={"Сыр"} inputId={"cheese"} />
          <InputToppings toppingName={"Бекон"} inputId={"bacon"} />
          <CheckoutButton>Добавить</CheckoutButton>
        </RadioContainer>
      </Modal>
    </Overlay>
  );
};

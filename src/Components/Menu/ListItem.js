import React from "react";
import styled from "styled-components";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;  

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin: 30px;
  padding: 15px;
  color: white;
  font-size: 30px;
  z-index: 1;
  transition: all 0.3s;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;
    opacity: 0.5;
    z-index: -1;
  }
  &:hover {
    box-shadow: inset 0 0 50px 30px darkgrey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
  }
`;

export const ListItem = ({ ListItem, setOpenItem }) => {
  return (
    <List>
      {ListItem.map((item) => (
        <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
          <p>{item.name}</p>
          <p>
            {item.price.toLocaleString("ru-RU", {
              style: "currency",
              currency: "RUB",
            })}
          </p>
        </Item>
      ))}
    </List>
  );
};

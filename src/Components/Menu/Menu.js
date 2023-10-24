import React from "react";
import styled from "styled-components";
import { dbMenu } from "../DBMenu";
import {ListItem} from './ListItem'

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-left: 380px;
`;

const MenuSection = styled.section`
  padding: 30px;
`;

export const Menu = ({ setOpenItem }) => {
  return (
    <MenuStyled>
      <MenuSection>
        <h2>Бургеры</h2>
        <ListItem ListItem={dbMenu.burger} setOpenItem={setOpenItem} />
      </MenuSection>
      <MenuSection>
        <h2>Закуски</h2>
        <ListItem ListItem={dbMenu.other} setOpenItem={setOpenItem} />
      </MenuSection>
    </MenuStyled>
  );
};

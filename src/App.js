import React from "react";
import { NavBar } from "./Components/NavBar/NavBar";
import { GlobalStyle } from "./Components/Style/GlobalStyle";
import { Menu } from "./Components/Menu/Menu";
import { Banner } from "./Components/Banner";
import { ModalItem } from "./Components/Modal/ModalItem";
import { OrderMenu } from "./Components/Order/OrderMenu";
import { useOpenItem } from "./Components/Hooks/useOpenItem";
import { useOrders } from "./Components/Hooks/useOrders";

function App() {
  const openItem = useOpenItem()
  const orders = useOrders()


  return (
    <>
      <GlobalStyle/> 
      <Banner/>
      <OrderMenu {...orders}/>
      <NavBar/>
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;

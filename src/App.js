import React from "react";
import { NavBar } from "./Components/NavBar";
import { GlobalStyle } from "./Components/GlobalStyle";
import { Menu } from "./Components/Menu";
import { Banner } from "./Components/Banner";
import { ModalItem } from "./Components/ModalItem";
import { OrderMenu } from "./Components/orderMenu";

function App() {
  const [openItem, setOpenItem] = React.useState(null)


  return (
    <>
      <GlobalStyle/> 
      <Banner/>
      <OrderMenu/>
      <NavBar/>
      <Menu setOpenItem={setOpenItem} />
      <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </>
  );
}

export default App;

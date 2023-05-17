
import React, { useState } from "react";
import Menu from "./Menu";


 function MenuMobile()  {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <>
      <div  >
      <span className="material-icons menu-btn" onClick={() => setIsOpen(true)}>
        menu
      </span>
      <Menu isOpen={isOpen} onChange={setIsOpen}></Menu>
    </div>
    </>

  )
}
export default MenuMobile;
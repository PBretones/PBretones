import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";



const SidebarElements = ({ children, sidebarStatus }) => {

  return (

    <div className={`side-bar ${sidebarStatus ? 'active-sidebar' : ''}`} >
      <div className="content">{children}</div>
    </div>


  );
};

export default SidebarElements;
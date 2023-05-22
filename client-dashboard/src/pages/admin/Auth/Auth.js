import React, { useState } from "react";
import { Tab } from "semantic-ui-react";
import { image } from "../../../assets/";
import { RegisterForm } from "../../../components/Admin/Auth";
import "./Auth.scss";

export const Auth = () => {
  /* Para que cuando el usuario se registre pase a login */
  const [activeIndex, setActiveIndex] = useState(1);
  const openLogin = () => {
    setActiveIndex(0);
    console.log("Entre en tab");
  };

  const panels = [
    {
      menuItem: "Ingresar",
      render: () => {
        return (
          <Tab.Pane>
            <h2>Login form</h2>
          </Tab.Pane>
        );
      },
    },
    {
      menuItem: "Registrarse",
      render: () => {
        return (
          <Tab.Pane>
            <RegisterForm openLogin={openLogin}></RegisterForm>
          </Tab.Pane>
        );
      },
    },
  ];
  return (
    <div className="auth">
      <img src={image.logo} alt="" className="logo" />
      <Tab
        panes={panels}
        className="auth__form"
        activeIndex={activeIndex}
        onTabChange={(_, data) => setActiveIndex(data.activeIndex)}
      />
    </div>
  );
};

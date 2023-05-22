import React, { useState } from "react";
import "./LoginForm.form";
import { Auth } from "../../../../api";
import { Form } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";

const authController = new Auth();

export const LoginForm = (props) => {
  const { openLogin } = props;
  const [error, setError] = useState("");

  const formik = useFormik({
    initialValues: initialValues(),
    /* Validaciones de error */
    validationSchema: validationSchema(),
    /* Sólo validamos cuando enviemos el formulario, no mientras se escribe */
    validateOnChange: false,
    validateOnBlur: false,
    
    onSubmit: async (formValue) => {
      try {
        setError("");
        await authController.login(formValue);
        openLogin();
      } catch (error) {
        setError("Error en el servidor");
      }
    },
  });
  return (
    <Form className="register-form" onSubmit={formik.handleSubmit}>
     
      <Form.Input
        name="email"
        placeholder="Correo electrónico"
        autoComplete="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
      />
      <Form.Input
        name="new_password"
        type="password"
        autoComplete="new_password"
        placeholder="Contraseña"
        onChange={formik.handleChange}
        value={formik.values.new_password}
        error={formik.errors.new_password}
      />

      <Form.Button
        type="submit"
        primary
        fluid
        content="Iniciar sesión"
        loading={formik.isSubmitting}
      />
      {error && <p className="register-form__error">{error}</p>}
    </Form>
  );
};

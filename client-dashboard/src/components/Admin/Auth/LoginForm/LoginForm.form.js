import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    new_password: "",
  };
};

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El correo no es válido")
      .required("Campo requerido"),
    new_password: Yup.string().required("Campo requerido"),
  });
}

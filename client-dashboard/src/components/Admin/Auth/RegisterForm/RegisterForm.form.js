import * as Yup from "yup";

export const initialValues = () => {
  return {
    firstname: "",
    lastname: "",
    email: "",
    new_password: "",
    confirmPassword: "",
    privacyPolicy: false,
  };
};

export function validationSchema(){
  return Yup.object({
    firstname: Yup.string()
      .required("El nombre es requerido"),
    lastname: Yup.string()
      .required("El apellido requerido"),
    email: Yup.string()
      .email("El correo no es válido")
      .required("Campo requerido"),
    new_password: Yup.string().required("Campo requerido"),
    confirmPassword: Yup.string()
      .required("Campo requerido")
      .oneOf([Yup.ref("new_password")], "Las contraseñas no coinciden."),
    privacyPolicy: Yup.bool().isTrue(true),
  });
};

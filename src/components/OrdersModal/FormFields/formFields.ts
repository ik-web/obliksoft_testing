import { FieldProps } from "formik";
import { CustomTextField } from "./CustomTextFields";

interface FormField {
  label: string,
  name: string,
  type: string,
  placeholder: string,
  component: React.ComponentType<FieldProps>
}

export const formFields: FormField[] = [
  {
    label: "Назва",
    name:"order",
    type:"text",
    placeholder:"Статус посилки",
    component: CustomTextField
  },
  {
    label: "Ім’я та фамілія",
    name:"fullName",
    type:"text",
    placeholder:"Через пробіл",
    component: CustomTextField
  },
  {
    label: "Email",
    name:"email",
    type:"email",
    placeholder:"example@mail.com",
    component: CustomTextField
  },
  {
    label: "Значення поля",
    name:"fieldValue",
    type:"text",
    placeholder:"Введіть значення",
    component: CustomTextField
  },
];

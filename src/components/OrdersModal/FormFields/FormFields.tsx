import CustomPhoneField from "./CustomPhoneField";
import CustomSelect from "./CustomSelect";
import { CustomTextField } from "./CustomTextField";

interface FormField {
  id: number;
  component: JSX.Element;
}

export interface SelectInterface {
  option: string;
  value: string;
}

const usersGroupOptions: string[] = [
  "Група-1",
  "Група-2",
  "Група-3"
];
const languageOptions: string[] = [
  "Українська",
  "Англійська",
  "Португальська"
];

const newFieldOptions: string[] = [
  "Teкст-1",
  "Teкст-2",
  "Teкст-3"
];

export const FormFields: FormField[] = [
  {
    id: 1,
    component: (
      <CustomTextField
        name="order"
        type="text"
        placeholder="Статус посилки"
        label="Назва"
      />
    ),
  },
  {
    id: 2,
    component: (
      <CustomTextField
        name="fullName"
        type="text"
        placeholder="Через пробіл"
        label="Ім’я та фамілія"
      />
    ),
  },
  {
    id: 3,
    component: (
      <CustomPhoneField
        name="phoneNumber"
        type="tel"
        placeholder="1 (999) 999-9999"
        label="Номер телефону"
      />
    ),
  },
  {
    id: 4,
    component: (
      <CustomTextField
        name="email"
        type="email"
        placeholder="example@mail.com"
        label="Email"
      />
    ),
  },
  {
    id: 5,
    component: (
      <CustomSelect
        name="usersGroup"
        type="select"
        label="Група користувачів"
        hint="Оберіть групу"
        options={usersGroupOptions}
      />
    ),
  },
  {
    id: 6,
    component: (
      <CustomSelect
        name="language"
        type="select"
        label="Мова"
        hint="Оберіть мову"
        options={languageOptions}
      />
    ),
  },
  {
    id: 7,
    component: (
      <CustomSelect
        name="newField"
        type="select"
        label="Додати нове поле"
        hint="Заголовок"
        options={newFieldOptions}
      />
    ),
  },
  {
    id: 8,
    component: (
      <CustomTextField
        name="fieldValue"
        type="text"
        placeholder="Введіть значення"
        label="Значення поля"
      />
    ),
  },
];

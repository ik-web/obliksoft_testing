/// <reference types="react-scripts" />

export interface OrderInterface {
  id: number;
  name: string;
  url: string;
  author: string;
  date: string;
  time: string;
}

export interface FormInterface {
  parcelStatus: string;
  fullName: string;
  phone: string;
  email: string;
  usersGroup: string;
  language: string;
  newField: string;
  fieldValue: string;
}

export interface FieldInterface {
  name: string,
  value: string
}

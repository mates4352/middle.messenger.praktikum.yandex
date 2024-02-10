import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { Button, CardBody, input } from "../../atom";

Handlebars.registerPartial("CreateAccount", tpl);

export const CreateAccount = () => {
  return Handlebars.compile(tpl)({
    cardBody: CardBody({
      cardBodyFormId: "create-account-form-id",
      title: "Регистрация",
      button: Button({
        text: "Зарегистрироваться",
        type: "submit",
      }),
      cardBodyButtonToId: "create-account-button-to-sign-in-id",
      cardBodyButtonToText: "Войти",
      cardBodyWrapInputs: [
        {
          input: input({
            id: "create-account-form-input-email",
            name: "email",
            type: "email",
            labelValue: "Почта",
            error: "",
          }),
        },

        {
          input: input({
            id: "create-account-form-input-email",
            name: "login",
            type: "text",
            labelValue: "Логин",
            error: "",
          }),
        },

        {
          input: input({
            id: "create-account-form-input-email",
            name: "first_name",
            type: "text",
            labelValue: "Имя",
            error: "",
          }),
        },

        {
          input: input({
            id: "create-account-form-input-email",
            name: "second_name",
            type: "text",
            labelValue: "Фамилия",
            error: "",
          }),
        },

        {
          input: input({
            id: "create-account-form-input-email",
            name: "phone",
            type: "phone",
            labelValue: "Телефон",
            error: "",
          }),
        },

        {
          input: input({
            id: "create-account-form-input-email",
            name: "password",
            type: "password",
            labelValue: "Пароль",
            error: "",
          }),
        },

        {
          input: input({
            id: "create-account-form-input-email",
            name: "password_confirm",
            type: "password",
            labelValue: "Пароль (ещё раз)",
            error: "",
          }),
        },
      ],
    }),
  });
};

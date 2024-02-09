import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { Button, input } from "../../atom";

Handlebars.registerPartial("CreateAccount", tpl);

export const CreateAccount = () => {
  return Handlebars.compile(tpl)({
    input1: input({
      id: "create-account-form-input-email",
      name: "email",
      type: "email",
      labelValue: "Почта",
      error: "",
    }),

    input2: input({
      id: "create-account-form-input-email",
      name: "login",
      type: "text",
      labelValue: "Логин",
      error: "",
    }),

    input3: input({
      id: "create-account-form-input-email",
      name: "first_name",
      type: "text",
      labelValue: "Имя",
      error: "",
    }),

    input4: input({
      id: "create-account-form-input-email",
      name: "second_name",
      type: "text",
      labelValue: "Фамилия",
      error: "",
    }),

    input5: input({
      id: "create-account-form-input-email",
      name: "phone",
      type: "phone",
      labelValue: "Телефон",
      error: "",
    }),

    input6: input({
      id: "create-account-form-input-email",
      name: "password",
      type: "password",
      labelValue: "Пароль",
      error: "",
    }),

    input7: input({
      id: "create-account-form-input-email",
      name: "password_confirm",
      type: "password",
      labelValue: "Пароль (ещё раз)",
      error: "",
    }),

    button: Button({
      text: "Зарегистрироваться",
      type: "submit",
    }),
  });
};

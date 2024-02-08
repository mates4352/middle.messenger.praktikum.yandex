import * as Handlebars from "handlebars";
import tpl from "./tpl.hbs?raw";
import { input } from "../../atom/input";
import { Button } from "../../atom";

Handlebars.registerPartial("signIn", tpl);

export const signIn = () => {
  return Handlebars.compile(tpl)({
    input1: input({
      type: "text",
      name: "login",
      id: "sign-in-form-input-login",
      labelValue: "Логин",
      error: "",
    }),

    input2: input({
      type: "password",
      name: "password",
      id: "sign-in-form-input-password",
      labelValue: "Пароль",
      error: "",
    }),

    button: Button({
      type: "submit",
      id: "sign-in-form-button-submit",
      text: "Авторизоваться",
    }),
  });
};

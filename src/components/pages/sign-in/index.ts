import * as Handlebars from "handlebars";
import tpl from "./tpl.hbs?raw";
import { input } from "../../atom/input";
import { Button, CardBody } from "../../atom";

Handlebars.registerPartial("signIn", tpl);

export const signIn = () => {
  return Handlebars.compile(tpl)({
    cardBody: CardBody({
      cardBodyFormId: "sign-in-form-id",
      title: "Регистрация",
      button: Button({
        type: "submit",
        id: "sign-in-form-button-submit-id",
        text: "Вход",
      }),
      cardBodyButtonToId: "sign-in-button-to-create-account-id",
      cardBodyButtonToText: "Нет аккаунта?",
      classNameCardBodyWrap: "card-body__wrap--margin",
      cardBodyWrapInputs: [
        {
          input: input({
            type: "text",
            name: "login",
            id: "sign-in-form-input-login-id",
            labelValue: "Логин",
            error: "",
          }),
        },

        {
          input: input({
            type: "password",
            name: "password",
            id: "sign-in-form-input-password-id",
            labelValue: "Пароль",
            error: "",
          }),
        },
      ],
    }),
  });
};

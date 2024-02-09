import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { Button, InputText } from "../../atom";

Handlebars.registerPartial("ProfileDataChangePassword", tpl);

export const ProfileDataChangePassword = () => {
  return Handlebars.compile(tpl)({
    button: Button({
      className: "profile-data-change-password__button",
      text: "Сохранить",
      type: "submit",
    }),
    profileDataChangePasswordContent: [
      {
        text: "Старый пароль",
        input: InputText({
          id: "profile-data-change-password-input-text-old-password",
          value: "pochta@yandex.ru",
          type: "password",
          name: "oldPassword",
        }),
      },

      {
        text: "Новый пароль",
        input: InputText({
          id: "profile-data-change-password-input-text-new-password",
          value: "ivanivanov",
          type: "password",
          name: "newPassword",
        }),
      },

      {
        text: "Повторите новый пароль",
        input: InputText({
          id: "profile-data-change-password-input-text-confirm",
          value: "ivanivanov",
          type: "password",
          name: "passwordConfirm",
        }),
      },
    ],
  });
};

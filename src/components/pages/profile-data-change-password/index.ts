import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { Button, InputText, ProfileDataInputs } from "../../atom";

Handlebars.registerPartial("ProfileDataChangePassword", tpl);

export const ProfileDataChangePassword = () => {
  return Handlebars.compile(tpl)({
    idForm: "profile-data-change-password-form-id",
    profileDataInputs: ProfileDataInputs({
      inputs: [
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
    }),

    button: Button({
      className: "profile-data-change-password__button",
      id: "profile-data-change-password-button-save-id",
      text: "Сохранить",
      type: "submit",
    }),
  });
};

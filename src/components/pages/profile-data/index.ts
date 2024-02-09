import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { ButtonText, InputText } from "../../atom";

Handlebars.registerPartial("ProfileData", tpl);

export const ProfileData = () => {
  return Handlebars.compile(tpl)({
    profileDataContent: [
      {
        text: "Почта",
        input: InputText({
          id: "profile-data-input-text-email",
          value: "pochta@yandex.ru",
          type: "text",
          name: "email",
          disabled: true,
        }),
      },

      {
        text: "Логин",
        input: InputText({
          id: "profile-data-input-text-login",
          value: "ivanivanov",
          type: "text",
          name: "login",
          disabled: true,
        }),
      },

      {
        text: "Имя",
        input: InputText({
          id: "profile-data-input-text-first-name",
          value: "Иван",
          type: "text",
          name: "first_name",
          disabled: true,
        }),
      },

      {
        text: "Фамилия",
        input: InputText({
          id: "profile-data-input-text-second-name",
          value: "Иванов",
          type: "text",
          name: "second_name",
          disabled: true,
        }),
      },

      {
        text: "Имя в чате",
        input: InputText({
          id: "profile-data-input-text-display-name",
          value: "Иван",
          type: "text",
          name: "display_name",
          disabled: true,
        }),
      },

      {
        text: "Телефон",
        input: InputText({
          id: "profile-data-input-text-phone",
          value: "+7 (909) 967 30 30",
          type: "text",
          name: "phone",
          disabled: true,
        }),
      },
    ],

    profileDataList: [
      {
        button: ButtonText({
          id: "profile-data-button-text-redirect-change-data",
          type: "button",
          text: "Изменить данные",
        }),
      },

      {
        button: ButtonText({
          id: "profile-data-button-text-redirect-change-password",
          type: "button",
          text: "Изменить пароль",
        }),
      },

      {
        button: ButtonText({
          id: "profile-data-button-text-exit",
          type: "button",
          text: "Выйти",
          className: "profile-data__button-exit",
        }),
      },
    ],
  });
};

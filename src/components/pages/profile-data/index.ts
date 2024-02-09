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
          className: "input-text-disabled",
          id: "profile-data-input-text-email",
          value: "pochta@yandex.ru",
          type: "text",
          name: "email",
        }),
      },

      {
        text: "Логин",
        input: InputText({
          className: "input-text-disabled",
          id: "profile-data-input-text-login",
          value: "ivanivanov",
          type: "text",
          name: "login",
        }),
      },

      {
        text: "Имя",
        input: InputText({
          className: "input-text-disabled",
          id: "profile-data-input-text-first-name",
          value: "Иван",
          type: "text",
          name: "first_name",
        }),
      },

      {
        text: "Фамилия",
        input: InputText({
          className: "input-text-disabled",
          id: "profile-data-input-text-second-name",
          value: "Иванов",
          type: "text",
          name: "second_name",
        }),
      },

      {
        text: "Имя в чате",
        input: InputText({
          className: "input-text-disabled",
          id: "profile-data-input-text-display-name",
          value: "Иван",
          type: "text",
          name: "display_name",
        }),
      },

      {
        text: "Телефон",
        input: InputText({
          className: "input-text-disabled",
          id: "profile-data-input-text-phone",
          value: "+7 (909) 967 30 30",
          type: "text",
          name: "phone",
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

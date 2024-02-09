import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { Button, InputText } from "../../atom";

Handlebars.registerPartial("ProfileDataChange", tpl);

export const ProfileDataChange = () => {
  return Handlebars.compile(tpl)({
    button: Button({
      className: "profile-data-change__button",
      text: "Сохранить",
      type: "submit",
    }),
    profileDataChangeContent: [
      {
        text: "Почта",
        input: InputText({
          id: "profile-data-change-input-text-email",
          value: "pochta@yandex.ru",
          type: "text",
          name: "email",
          disabled: false,
        }),
      },

      {
        text: "Логин",
        input: InputText({
          id: "profile-data-change-input-text-login",
          value: "ivanivanov",
          type: "text",
          name: "login",
          disabled: false,
        }),
      },

      {
        text: "Имя",
        input: InputText({
          id: "profile-data-change-input-text-first-name",
          value: "Иван",
          type: "text",
          name: "first_name",
          disabled: false,
        }),
      },

      {
        text: "Фамилия",
        input: InputText({
          id: "profile-data-change-input-text-second-name",
          value: "Иванов",
          type: "text",
          name: "second_name",
          disabled: false,
        }),
      },

      {
        text: "Имя в чате",
        input: InputText({
          id: "profile-data-change-input-text-display-name",
          value: "Иван",
          type: "text",
          name: "display_name",
          disabled: false,
        }),
      },

      {
        text: "Телефон",
        input: InputText({
          id: "profile-data-change-input-text-phone",
          value: "+7 (909) 967 30 30",
          type: "text",
          name: "phone",
          disabled: false,
        }),
      },
    ],
  });
};

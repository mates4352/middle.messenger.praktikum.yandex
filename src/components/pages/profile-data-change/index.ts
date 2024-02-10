import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { Button, InputText, ProfileDataInputs } from "../../atom";

Handlebars.registerPartial("ProfileDataChange", tpl);

export const ProfileDataChange = () => {
  return Handlebars.compile(tpl)({
    profileDataInputs: ProfileDataInputs({
      inputs: [
        {
          text: "Почта",
          input: InputText({
            id: "profile-data-change-input-text-email",
            value: "pochta@yandex.ru",
            type: "text",
            name: "email",
          }),
        },

        {
          text: "Логин",
          input: InputText({
            id: "profile-data-change-input-text-login",
            value: "ivanivanov",
            type: "text",
            name: "login",
          }),
        },

        {
          text: "Имя",
          input: InputText({
            id: "profile-data-change-input-text-first-name",
            value: "Иван",
            type: "text",
            name: "first_name",
          }),
        },

        {
          text: "Фамилия",
          input: InputText({
            id: "profile-data-change-input-text-second-name",
            value: "Иванов",
            type: "text",
            name: "second_name",
          }),
        },

        {
          text: "Имя в чате",
          input: InputText({
            id: "profile-data-change-input-text-display-name",
            value: "Иван",
            type: "text",
            name: "display_name",
          }),
        },

        {
          text: "Телефон",
          input: InputText({
            id: "profile-data-change-input-text-phone",
            value: "+7 (909) 967 30 30",
            type: "text",
            name: "phone",
          }),
        },
      ],
    }),

    button: Button({
      className: "profile-data-change__button",
      text: "Сохранить",
      type: "submit",
    }),
  });
};

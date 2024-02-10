import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { IconArrowRow } from "../../atom/icons";
import { Counter, InputSearch, MessageGroup } from "../../atom";

Handlebars.registerPartial("Chat", tpl);

export const Chat = () => {
  return Handlebars.compile(tpl)({
    icon: IconArrowRow({
      className: "chat__icon-arrow",
    }),
    inputSearch: InputSearch({
      id: "chat-input-search",
      type: "text",
      name: "search",
      value: "",
      placeholder: "Поиск",
    }),
    items: [
      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Андрей",
          message: "Изображение",
          date: "10:49",
          counter: Counter({
            className: "message-group__counter",
            counter: "2",
          }),
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Киноклуб",
          message: "Вы: стикер",
          date: "12:00",
          counter: "",
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Илья",
          message:
            "Друзья, у меня для вас особенный выпуск новостей! особенный выпуск новостей!",
          date: "15:12",
          counter: Counter({
            className: "message-group__counter",
            counter: "4",
          }),
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Вадим",
          message: "Вы: Круто!",
          date: "Пт",
          counter: "",
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "тет-а-теты",
          message:
            "И Human Interface Guidelines и Material Design рекомендуют Material Design рекомендуют",
          date: "Ср",
          counter: "",
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "1, 2, 3",
          message: "Изображение",
          date: "10:49",
          counter: Counter({
            className: "message-group__counter",
            counter: "2",
          }),
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Андрей",
          message:
            "Миллионы россиян ежедневно проводят десятки часов свое проводят десятки часов свое",
          date: "Пн",
          counter: "",
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Андрей",
          message: "Изображение",
          date: "10:49",
          counter: Counter({
            className: "message-group__counter",
            counter: "2",
          }),
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Design Destroyer",
          message:
            "В 2008 году художник Jon Rafman начал собирать Jon Rafman начал собирать",
          date: "Пн",
          counter: "",
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Day.",
          message:
            "Так увлёкся работой по курсу, что совсем забыл его анонсир что совсем забыл его анонсир",
          date: "1 Мая 2020",
          counter: "",
        }),
      },

      {
        messageGroup: MessageGroup({
          src: "",
          alt: "",
          name: "Стас Рогозин",
          message:
            "Можно или сегодня или завтра вечером. Можно или сегодня или завтра вечером.",
          date: "12 Апр 2020",
          counter: "",
        }),
      },
    ],
  });
};

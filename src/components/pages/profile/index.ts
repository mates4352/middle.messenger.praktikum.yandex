import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";
import { IconArrow } from "../../atom/icons";
import image from "./../../../assets/images/icons/logo.svg";

Handlebars.registerPartial("Profile", tpl);

export const Profile = () => {
  return Handlebars.compile(tpl)({
    iconArrow: IconArrow({
      className: "profile__icon-arrow",
    }),

    src: image,
    name: "Иван",
  });
};

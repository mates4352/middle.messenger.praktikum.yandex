import * as Handlebars from "handlebars";
import tpl from "./tpl.hbs?raw";

Handlebars.registerPartial("ButtonText", tpl);

type ButtonTextType = {
  id: string;
  type: string;
  text: string;
};

export const ButtonText = ({ id, type, text }: ButtonTextType) => {
  return Handlebars.compile(tpl)({ id, type, text });
};

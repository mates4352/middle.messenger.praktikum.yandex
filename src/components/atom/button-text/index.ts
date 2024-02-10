import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("ButtonText", tpl);

type ButtonTextType = {
  className?: string;
  id: string;
  type: string;
  text: string;
};

export const ButtonText = ({ className, id, type, text }: ButtonTextType) => {
  return Handlebars.compile(tpl)({ className, id, type, text });
};

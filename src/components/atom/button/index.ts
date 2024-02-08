import * as Handlebars from "handlebars";
import tpl from "./button.hbs?raw";

Handlebars.registerPartial("button", tpl);

type ButtonType = {
  text: string;
  id?: string;
  type: string;
};

export const Button = ({ text, id, type }: ButtonType) => {
  return Handlebars.compile(tpl)({
    text,
    id,
    type,
  });
};

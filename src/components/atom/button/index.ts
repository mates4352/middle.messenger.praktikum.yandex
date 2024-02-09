import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("button", tpl);

type ButtonType = {
  className?: string;
  text: string;
  id?: string;
  type: string;
};

export const Button = ({ className, text, id, type }: ButtonType) => {
  return Handlebars.compile(tpl)({
    className,
    text,
    id,
    type,
  });
};

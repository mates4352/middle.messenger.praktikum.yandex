import * as Handlebars from "handlebars";
import tpl from "tpl.hbs?raw";

Handlebars.registerPartial("InputText", tpl);

type InputTextType = {
  id: string;
  value: string;
  type: string;
  name: string;
};

export const InputText = ({ id, value, type, name }: InputTextType) => {
  return Handlebars.compile(tpl)({ id, value, type, name });
};

import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("InputText", tpl);

type InputTextType = {
  id: string;
  value: string;
  type: string;
  name: string;
  disabled: boolean;
};

export const InputText = ({
  id,
  value,
  type,
  name,
  disabled,
}: InputTextType) => {
  return Handlebars.compile(tpl)({ id, value, type, name, disabled });
};

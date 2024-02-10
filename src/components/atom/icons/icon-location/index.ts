import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("IconLocation", tpl);

type IconArrowType = {
  className?: string;
};

export const IconLocation = ({ className }: IconArrowType) => {
  return Handlebars.compile(tpl)({ className });
};

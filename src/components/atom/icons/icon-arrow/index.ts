import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("IconArrow", tpl);

type IconArrowType = {
  className?: string;
};

export const IconArrow = ({ className }: IconArrowType) => {
  return Handlebars.compile(tpl)({ className });
};

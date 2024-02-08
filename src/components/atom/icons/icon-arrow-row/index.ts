import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("IconArrowRow", tpl);

type IconArrowType = {
  className?: string;
};

export const IconArrowRow = ({ className }: IconArrowType) => {
  return Handlebars.compile(tpl)({ className });
};

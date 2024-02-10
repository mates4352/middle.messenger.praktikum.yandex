import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("IconImage", tpl);

type IconArrowType = {
  className?: string;
};

export const IconImage = ({ className }: IconArrowType) => {
  return Handlebars.compile(tpl)({ className });
};

import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("CardBody", tpl);

type CardBodyType = {
  cardBodyFormId: string;
  title: string;
  button: any;
  cardBodyButtonToId: string;
  cardBodyButtonToText: string;
  classNameCardBodyWrap?: string;
  cardBodyWrapInputs: Array<{ input: any }>;
};

export const CardBody = ({
  cardBodyFormId,
  title,
  button,
  cardBodyButtonToId,
  cardBodyButtonToText,
  classNameCardBodyWrap,
  cardBodyWrapInputs,
}: CardBodyType) => {
  return Handlebars.compile(tpl)({
    cardBodyFormId,
    title,
    button,
    cardBodyButtonToId,
    cardBodyButtonToText,
    classNameCardBodyWrap,
    cardBodyWrapInputs,
  });
};

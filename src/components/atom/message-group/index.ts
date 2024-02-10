import * as Handlebars from "handlebars";
import tpl from "./index.hbs?raw";

Handlebars.registerPartial("MessageGroup", tpl);

type MessageGroupType = {
  className?: string;
  src: string;
  alt: string;
  date: string;
  name: string;
  message: string;
  counter: any;
};

export const MessageGroup = ({
  className,
  src,
  alt,
  date,
  name,
  message,
  counter,
}: MessageGroupType) => {
  return Handlebars.compile(tpl)({
    className,
    src,
    alt,
    date,
    name,
    message,
    counter,
  });
};

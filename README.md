## Messenger описание проекта

Концепция данного проекта заключается в
предоставление возможности общению людей через чаты.

Ссылка на сайт : https://wonderful-kangaroo-2f4639.netlify.app/

## Установка

Перед установкой проверить версию node
должна стоять версия равная или больше 20.11.0

- `yarn install` — установка стабильной версии,
- `yarn dev` — запуск версии для разработчика,
- `yarn start` — сборка стабильной версии.

## **Примеры использования**

###### Проект использует методологию Atomic Design https://atomicdesign.bradfrost.com/chapter-2/

###### в качестве шаблонизатора используется Handlebars https://handlebarsjs.com/

###### в качестве препроцессора sass https://sass-scss.ru/.

##### Структура компоненты:

- `index.hbs` - в данном файле пишется html разметка,
- `index.ts` - в данном файле пишется html разметка,
- `index.scss` - в данном файле пишется html разметка.
-

##### Пример компоненты:

`inedx.hbs`

```
<button 
    class="button 
    {{className}}" 
    id="{{id}}" 
    type="{{type}}">
    {{text}}
</button>
```

`inedx.scss`

```
.button {
  display: block;
  width: 100%;
  max-width: 280px;
  height: 37px;
  font: var(--font_4);
  color: var(--white);
  background-color: var(--blue-100);
  border-radius: 8px;
  transition: transform 300ms ease, opacity 300ms ease;

  &:active {
    transform: scale(0.95);
  }

  &:hover {
    opacity: 0.8;
  }
}
```

`inedx.ts`

```
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
```

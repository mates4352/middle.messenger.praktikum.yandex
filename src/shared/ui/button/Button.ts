import s from "./Button.module.scss";
import {runOnLoad} from "../../lib/utils/run-on-load";
import {getElementId} from "../../lib/utils/get-element-id";

type ButtonType = {
  class?: string
  text: string
  id: string
  type: string
  onClickButton?: () => void
};

export const Button = (props: ButtonType) => {
  const className = props.class ? `${props.class}  ${s.button}` : s.button

  runOnLoad(() => {
    if(props.onClickButton) {
      const button = getElementId(`#${props.id}`)

      if(button) {
        button.addEventListener("click", () => {
          props.onClickButton && props.onClickButton()
        })
      }
    }
  })

  return `
    <button class="${className}" id="${props.id}" type="${props.type}">${props.text}</button>
  `
};
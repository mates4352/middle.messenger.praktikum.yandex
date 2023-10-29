import s from "./Input.module.scss";
import {runOnLoad} from "../../lib/utils/run-on-load";
import {getElementId} from "../../lib/utils/get-element-id";

type InputType = {
  class?: string;
  type: string;
  name: string
  id: string
  labelValue: string
  error?: string
  onChangeInput?: (valueInput: string) => void
};
export const Input = (props: InputType) => {
  const className = props.class ? `${props.class}  ${s.label}` : s.label

  runOnLoad(() => {
    const input = getElementId(`#${props.id}`);

    if (input) {
      input.addEventListener("input", (e: Event) => {
        const inputValue = (e.target as HTMLInputElement).value;

        if (props.onChangeInput) {
          props.onChangeInput(inputValue);
        }
      });
    }
  })

  return `
    <label class="${className}">
      <input 
        class="${s.input}" 
        type="${props.type}" 
        name="${props.type}" 
        id="${props.id}"
        required
      />
      
      <span class="${s.labelText}">${props.labelValue || ""}</span>
      
      <p class="${s.error}">${props.error || ''}</p>
    </label>
  `
};
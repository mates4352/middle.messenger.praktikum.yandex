import "./assets/styles/styles.scss"
import {FormCreateAccount, FormSubmitCreateAccountType} from "../widgets/form-create-account/ui/Form-create-account";

export const App= () => {
  return `
    <div id="donor">
        ${FormCreateAccount({id:"form-create-account", onSubmit: (values: FormSubmitCreateAccountType) => {console.log(values)}})}
    </div>
  `
}
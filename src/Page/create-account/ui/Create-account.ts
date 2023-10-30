import s from "./Create-account.module.scss";
import {FormCreateAccount} from "../../../widgets/form-create-account/ui/Form-create-account";

type CreateAccountType = {

};

export const CreateAccount = ({}: CreateAccountType) => {
  return `
    <section class="${s.createAccount}">
        <div class="${s.body}">
            ${FormCreateAccount({id: "form-create-account", onSubmit: () => {}})}
        </div>
    </section>
  `
};
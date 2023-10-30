import s from "./Create-account.module.scss";
import {FormCreateAccount} from "../../../widgets/form-create-account/ui/Form-create-account";
import {sendLocation} from "../../../shared/lib/utils/use-location";
import {AuthLink} from "../../auth/lib/config/auth-link";

type CreateAccountType = {

};

export const CreateAccount = ({}: CreateAccountType) => {
  const onRedirectToCreateAccount = () => {
    sendLocation(AuthLink.SIGH_IN)
  }

  return `
    <section class="${s.createAccount}">
        <div class="${s.body}">
            ${FormCreateAccount({
              id: "form-create-account", 
              onSubmit: () => {},
              onClickButtonToCreateAccount:  onRedirectToCreateAccount
            })}
        </div>
    </section>
  `
};
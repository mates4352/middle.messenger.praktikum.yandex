import "./assets/styles/styles.scss"
import {Auth} from "../Page/auth/ui/Auth";

export const App= () => {
  return `
    <div id="Main">
        ${Auth({})}
    </div>
  `
}
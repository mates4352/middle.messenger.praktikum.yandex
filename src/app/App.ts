import "./assets/styles/styles.scss"
import {Auth} from "../Page/auth/Auth";

export const App= () => {
  return `
    <div id="Main">
        ${Auth({})}
    </div>
  `
}
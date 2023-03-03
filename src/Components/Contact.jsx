
import {Animate} from "./Animate"
export default function Contact() {
  return (
    <Animate>
      <div id="contact">
        <h1>
          Let's <span>Connect</span>
        </h1>
        <form>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <button type="submit">Connect</button>
        </form>
      </div>
    </Animate>
  )
}

import {Link} from "react-router-dom"
import {Animate} from "../Animate/Animate"
import {HeaderAnimate} from "../Components"
export const Contact = () => {
  return (
    <Animate>
      <main>
        <div className=" gap-2 mx-4 justify-between flex main-section ">
          <div className="place-self-center">
            <HeaderAnimate>
              <h1 className=" nav_link text-6xl md:text-7xl lg:text-8xl">
                Connect
              </h1>
            </HeaderAnimate>
            <div className="max-w-md my-2 text-sm md:text-base">
              <p>
                Connect with me when there is work need need to be done or have
                i job offer here here are the links.
              </p>
              <span className="underline hover:line-through text-mainColor inline-block my-2  mr-2">
                <Link to={"https://linkden.com/in/housseinsa"}>Linkden</Link>
              </span>
              <span className="underline hover:line-through text-mainColor my-2 inline-block mx-2 ">
                <Link to={"https://form.com"}>Form</Link>
              </span>
            </div>
          </div>
        </div>
      </main>
    </Animate>
  )
}
